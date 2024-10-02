/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const cardIcons = ["♦", "♥", "♠", "♣"];

  const getRandom = array => array[Math.floor(Math.random() * array.length)];
  let selectedIcon = getRandom(cardIcons);
  if (selectedIcon == "♦" || selectedIcon == "♥") {
    document.querySelector("#topIcon").classList.add("text-danger");
    document.querySelector("#bottomIcon").classList.add("text-danger");
  }

  document.querySelector("#topIcon").innerHTML = selectedIcon;
  document.querySelector("#cardNumber").innerHTML = getRandom(cardValues);
  document.querySelector("#bottomIcon").innerHTML = selectedIcon;
};
