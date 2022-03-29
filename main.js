const btnClick = document.querySelector('#btnClick');
const btnHover = document.querySelector('#btnHover');
const dropDownClickItems = document.querySelector('.click');
const dropDownHoversItems = document.querySelector('.hover');

function toggleDisplay(el) {
  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

btnClick.addEventListener('click', () => {
  toggleDisplay(dropDownClickItems);
});

btnHover.addEventListener('mouseenter', () => {
  toggleDisplay(dropDownHoversItems);
});
