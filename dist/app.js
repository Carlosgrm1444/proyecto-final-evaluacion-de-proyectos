const slides = [...document.querySelectorAll('.slide')];
const stage = document.querySelector('#stage');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const slideCount = document.querySelector('#slideCount');
const slideLabel = document.querySelector('#slideLabel');
const progressBar = document.querySelector('#progressBar');
const overviewDialog = document.querySelector('#overviewDialog');
const overviewGrid = document.querySelector('#overviewGrid');
const sourcesDialog = document.querySelector('#sourcesDialog');
const diagramDialog = document.querySelector('#diagramDialog');

let current = 0;
let touchStartX = 0;

function displaySlide(index) {
  const next = Math.max(0, Math.min(index, slides.length - 1));
  stage.dataset.dir = next < current ? 'prev' : 'next';
  current = next;

  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === current;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
    slide.inert = !active;
  });

  const number = String(current + 1).padStart(2, '0');
  slideCount.textContent = `${number} / ${slides.length}`;
  slideLabel.textContent = slides[current].dataset.title;
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  document.querySelector('#currentSource').textContent = `Diapositiva ${current + 1}: ${slides[current].dataset.source}`;
  history.replaceState(null, '', `#slide-${current + 1}`);
  stage.scrollTop = 0;
}

function openOverview() {
  overviewDialog.showModal();
}

slides.forEach((slide, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${slide.dataset.title}`;
  button.addEventListener('click', () => {
    overviewDialog.close();
    displaySlide(index);
  });
  overviewGrid.append(button);
});

prevBtn.addEventListener('click', () => displaySlide(current - 1));
nextBtn.addEventListener('click', () => displaySlide(current + 1));
document.querySelector('#overviewBtn').addEventListener('click', openOverview);
document.querySelector('#sourceBtn').addEventListener('click', () => sourcesDialog.showModal());
document.querySelector('#openDiagram').addEventListener('click', () => diagramDialog.showModal());
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => document.getElementById(button.dataset.close).close());
});

document.querySelector('#fullBtn').addEventListener('click', async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    await document.documentElement.requestFullscreen();
  }
});

document.addEventListener('keydown', event => {
  const dialogOpen = [...document.querySelectorAll('dialog')].some(dialog => dialog.open);
  const inputFocused = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
  if (dialogOpen || inputFocused || event.altKey || event.ctrlKey || event.metaKey) return;

  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
    event.preventDefault();
    displaySlide(current + 1);
  } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
    event.preventDefault();
    displaySlide(current - 1);
  } else if (event.key === 'Home') {
    displaySlide(0);
  } else if (event.key === 'End') {
    displaySlide(slides.length - 1);
  } else if (event.key.toLowerCase() === 'g') {
    openOverview();
  } else if (event.key.toLowerCase() === 's') {
    sourcesDialog.showModal();
  } else if (event.key.toLowerCase() === 'f') {
    document.querySelector('#fullBtn').click();
  }
});

stage.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

stage.addEventListener('touchend', event => {
  const delta = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(delta) < 70) return;
  displaySlide(current + (delta < 0 ? 1 : -1));
}, { passive: true });

const hashSlide = Number.parseInt(location.hash.replace('#slide-', ''), 10);
displaySlide(Number.isFinite(hashSlide) ? hashSlide - 1 : 0);

const newLicenses = document.querySelector('#newLicenses');
const exchangeRate = document.querySelector('#exchangeRate');
const hostingCost = document.querySelector('#hostingCost');
const annualPresentFactor = [1, 2, 3].reduce((sum, year) => sum + 1 / 1.1 ** year, 0);
const pesoFormat = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 });

function updateLange() {
  const licenses = Number(newLicenses.value);
  const rate = Number(exchangeRate.value);
  const hosting = Number(hostingCost.value);
  const enterprise = 253200 + (7900 * 12 + licenses * 61 * 12 * rate + hosting * 12) * annualPresentFactor;
  const community = 384400 + 9900 * 12 * annualPresentFactor;
  const maximum = Math.max(enterprise, community);

  document.querySelector('#newLicensesValue').textContent = licenses;
  document.querySelector('#exchangeRateValue').textContent = rate.toFixed(1);
  document.querySelector('#hostingCostValue').textContent = pesoFormat.format(hosting);
  document.querySelector('#enterpriseTotal').textContent = pesoFormat.format(enterprise);
  document.querySelector('#communityTotal').textContent = pesoFormat.format(community);
  document.querySelector('#enterpriseBar').style.width = `${100 * enterprise / maximum}%`;
  document.querySelector('#communityBar').style.width = `${100 * community / maximum}%`;

  const difference = Math.abs(enterprise - community);
  const chosen = enterprise < community ? 'Enterprise' : 'Community';
  document.querySelector('#langeVerdict').textContent =
    `En este escenario, ${chosen} presenta ${pesoFormat.format(difference)} menos de costo presente.`;
}

[newLicenses, exchangeRate, hostingCost].forEach(input => input.addEventListener('input', updateLange));
updateLange();
