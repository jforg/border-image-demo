var
  borderDiv = document.getElementById('borderDiv'),
  textSpan = document.getElementById('textSpan'),
  sourceClassName = '_source-enabled';

function toggleClass() {
  borderDiv.classList.toggle(sourceClassName);
}
function toggleText() {
  textSpan.textContent = borderDiv.classList.contains(sourceClassName) ? 'Remove' : 'Add';
}
function toggle(event) {
  toggleClass();
  toggleText();
}
document.getElementById('toggleBtn').addEventListener('click', toggle, false);
