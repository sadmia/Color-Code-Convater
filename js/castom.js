"use strict";

let bgDiv = document.getElementById('bgDiv');
let haxBtn = document.getElementById('HaxBtn');
let rgbBtn = document.getElementById('rgbBtn');
let colurSelect = document.getElementById('colurSelect');
let inputColorCode = document.getElementById('inputColorCode');
let warningText = document.getElementById('warningText');
let hexColorBg = document.getElementById('hexColorBg');
let hexCode = document.getElementById('hexCode');
let rgbBgColor = document.getElementById('rgbBgColor');
let rgbCode = document.getElementById('rgbCode');

haxBtn.addEventListener("click", function() {
	inputColorCode.value = "#";
	haxBtn.classList.add("activeBtn");
	rgbBtn.classList.remove("activeBtn");
})

rgbBtn.addEventListener("click", function() {
	inputColorCode.value = "rgb()";
	rgbBtn.classList.add("activeBtn");
	haxBtn.classList.remove("activeBtn");

	inputColorCode.addEventListener("input", () => {
		let inputColorValue = inputColorCode.value;

		if (inputColorValue <= 16) {
			bgDiv.style.background = inputColorValue;
			hexColorBg.style.background = inputColorValue;
			rgbBgColor.style.background = inputColorValue;
			hexCode.innerText = inputColorValue;
			rgbCode.innerText = bgDiv.style.background + ";";
		} else {
			warningText.innerText = "Input Color Code Is Problem.";
			warningText.style.display = "block";
		}
	})
})

colurSelect.addEventListener("input", function() {
	let colorValue = colurSelect.value;
	bgDiv.style.background = colorValue;
	hexColorBg.style.background = colorValue;
	rgbBgColor.style.background = colorValue;
	hexCode.innerText = colorValue;
	rgbCode.innerText = bgDiv.style.background + ";";
})


inputColorCode.addEventListener("input", function() {
	let inputColorValue = inputColorCode.value;

	if (inputColorValue.length <= 7) {
		bgDiv.style.background = inputColorValue;
		hexColorBg.style.background = inputColorValue;
		rgbBgColor.style.background = inputColorValue;
		hexCode.innerText = inputColorValue;
		rgbCode.innerText = bgDiv.style.background + ";";
	} else {
		warningText.innerText = "Input Color Code Is Problem.";
		warningText.style.display = "block";
	}
})