var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("topheader")[0].style.top = "0";
  } else {
    document.getElementsByClassName("topheader")[0].style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
};
