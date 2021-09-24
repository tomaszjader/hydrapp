import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();
const date = new Date();
const dateKey = date.toLocaleDateString();

let realValue = localStorage.getItem(dateKey)
  ? localStorage.getItem(dateKey)
  : localStorage.setItem(dateKey, 0);

const addButton = document.querySelector('.add__button__js');
const subtractButton = document.querySelector(".subtract__button__js");
const value = document.querySelector(".value__js");

realValue = parseInt(value.innerHTML);
realValue = localStorage.getItem(dateKey);
realValue >= 99 ? localStorage.setItem(dateKey, 99) : realValue;
realValue = localStorage.getItem(dateKey);
value.innerHTML=realValue;

addButton.addEventListener("click", () => {
    if (realValue!==99) realValue++;
    value.innerHTML = realValue;
    localStorage.setItem(dateKey, realValue);

});
subtractButton.addEventListener("click", () => {
    if (realValue)
        realValue--;
    value.innerHTML = realValue;
    localStorage.setItem(dateKey, realValue);
});