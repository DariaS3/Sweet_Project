"use strict";
document.addEventListener("DOMContentLoaded", function() {
  var page = window.location.href;
  if (page.indexOf("index.html") != -1) {
    console.log(1);
    document
      .getElementsByClassName("menu")[0]
      .children[0].classList.add("active");
  }
  if (page.indexOf("shop.html") != -1) {
    console.log(2);
    document
      .getElementsByClassName("menu")[0]
      .children[1].classList.add("active");
  }
  var button = document.getElementsByClassName("cart")[0];
  button.addEventListener("click", function() {
    this.style.backgroundColor = "white";
  });
});
