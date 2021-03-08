window.addEventListener('scroll', event => {
  const elem = document.getElementById('gototop');
  const y = scrollY;
  if (y > 200) {
    elem.style.display = 'block';
  } else {
    elem.style.display = 'none';
  }
});
