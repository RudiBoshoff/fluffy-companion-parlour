// execute js code only AFTER the webpage has loaded
window.addEventListener("load", function () {
  const nav = document.querySelector("#main");
  const topOfNav = nav.offsetTop;

  function fixNav() {
  //   457px is where the nav bar starts as shown in console
    console.log(topOfNav, window.scrollY);
    if (window.scrollY >= topOfNav) {
      // set the padding to the height of the nav bar because when you set an
      // element to fixed, it no longer ocupies space in the document
      document.body.style.paddingTop = nav.offsetHeight + "px";
      // add the class
      document.body.classList.add("fixed-nav");

    } else {
      // set the padding back to 0
      document.body.style.paddingTop = 0;
      // remove the class
      document.body.classList.remove("fixed-nav");

    }
  }

  window.addEventListener("scroll", fixNav);
});
