'use strict';

// document.querySelector(".hamburger-menu").onclick = function () {
// 	document.querySelector(".hamburger-menu").classList.toggle("active");
// 	document.querySelector(".header-menu").classList.toggle("active");
// };

const hamburger_menu = document.querySelector(".hamburger-menu");
const header_menu = document.querySelector(".header-menu");

hamburger_menu.onclick = () => {
	hamburger_menu.classList.toggle("active");
	header_menu.classList.toggle("active");
};