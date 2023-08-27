import _vars from "../_vars";

const {header} = _vars;

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const scrollThreshold = 10; // Порог для начала анимации

  if (prevScrollPos > currentScrollPos) {
      header.style.top = "0";
  } else {
    if (currentScrollPos > scrollThreshold) {
      header.style.top = "-100px";
    }
  }

  prevScrollPos = currentScrollPos;
}
