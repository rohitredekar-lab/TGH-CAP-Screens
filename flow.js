const capContext = JSON.parse(sessionStorage.getItem('capAuditContext') || '{}');
const capObservations = JSON.parse(sessionStorage.getItem('capObservations') || '[]');

function saveCapContext(patch) {
  Object.assign(capContext, patch);
  sessionStorage.setItem('capAuditContext', JSON.stringify(capContext));
}

function goCapPage(page) {
  sessionStorage.setItem('capAuditContext', JSON.stringify(capContext));
  window.location.href = `../pages/${page}.html`;
}

function capContextMarkup() {
  if (!capContext.branch) return '';
  return `<div class="flow-context"><strong>${capContext.code || ''}</strong><span>${capContext.branch}</span><span>Audit Week: ${capContext.week || 'Not selected'}</span><span>Instance: ${capContext.instance || 'Not selected'}</span></div>`;
}

function renderCapContext() {
  const mount = document.querySelector('[data-flow-context]');
  if (mount) mount.innerHTML = capContextMarkup();
}

function persistObservations() {
  sessionStorage.setItem('capObservations', JSON.stringify(capObservations));
  saveCapContext({ observationCount: capObservations.length });
}

renderCapContext();
