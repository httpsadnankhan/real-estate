function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  //Preloader
document.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader when the content is fully loaded
  setTimeout(function () {
      document.querySelector(".preloader").style.display = "none";
  }, 1000); // Adjust the delay as needed
});

// Back-to-top
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("backToTopBtn");

  // Show/hide the button based on scroll position
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopButton.style.display = "block";
      } else {
          backToTopButton.style.display = "none";
      }
  };

  // Scroll to the top when the button is clicked
  backToTopButton.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
});