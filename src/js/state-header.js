window.onscroll = function () {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.style.top = '0';
  } else {
    header.style.top = 'auto';
  }
};
