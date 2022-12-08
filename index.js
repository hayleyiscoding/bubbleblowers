(function ($) {
  $(function () {
    var agBubbles = $(".js-bubbles");

    for (var t = 30 + Math.floor(61 * Math.random()), e = 0; e < t; e++) {
      agBubbles.append(
        '<div class="js-ag-bubble-container"><div class="js-ag-bubble"></div></div>'
      );
    }

    agBubbles.find(".js-ag-bubble-container").each(function () {
      var t = Math.floor(101 * Math.random()),
        e = 3 + Math.floor(13 * Math.random()),
        n = Math.floor(16 * Math.random()),
        r = 20 + Math.floor(9 * Math.random()),
        i = Math.floor(3 * Math.random()),
        o = $(this);

      o.css({
        left: t + "%",
        "-webkit-animation-duration": r + "s",
        "-moz-animation-duration": r + "s",
        "-ms-animation-duration": r + "s",
        "animation-duration": r + "s",
        "-webkit-animation-delay": n + "s",
        "-moz-animation-delay": n + "s",
        "-ms-animation-delay": n + "s",
        "animation-delay": n + "s",
        "-webkit-filter": "blur(" + i + "px)",
        "-moz-filter": "blur(" + i + "px)",
        "-ms-filter": "blur(" + i + "px)",
        filter: "blur(" + i + "px)",
      }),
        o.children(".bubble").css({ width: e + "px", height: e + "px" });
    });
  });
})(jQuery);

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-list");
const navUl = document.querySelector(".nav-ul");

if (hamburger) {
  hamburger.addEventListener("click", (event) => {
    navList.classList.add("show");

    const cross = document.querySelector(".cross");
    if (cross) {
      cross.addEventListener("click", () => {
        navList.classList.remove("show");
      });
    }
  });
}

if (navUl) {
  navUl.addEventListener("click", (event) => {
    if (event.target.localName === "a") {
      navList.classList.remove("show");
    }
  });
}

// Typewriter effect for banner

let typewriterText = document.getElementById("typewriter")

var i = 0;
var txt = 'Registrations now open for 2023! 🥳 Contact us today.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
  typewriterText.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', (event) => {
  typeWriter();
})


