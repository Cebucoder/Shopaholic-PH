var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navigations").style.top = "0";
  } else {
    document.getElementsByClassName("navigations").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}