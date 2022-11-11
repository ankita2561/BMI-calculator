"use strict";
document.querySelector(".btn1").addEventListener("click", function () {
  let h = Number(document.querySelector("#height").value);
  let h1 = Number(document.querySelector("#height1").value);
  let w = Number(document.querySelector("#weight").value);
  console.log(h);
  console.log(h1);
  console.log(w);

  if (h <= 0 || h === "") {
    document.querySelector(".para").textContent = "Please enter a valid input";
  } else if (h1 < 0) {
    document.querySelector(".para").textContent = "Please enter a valid input";
  } else if (w <= 0 || w === "") {
    document.querySelector(".para").textContent = "Please enter a valid input";
  } else {
    const r = (h * 12 + h1) * 0.0254;
    const r1 = w / (r * r);
    document.querySelector("#result1").value = parseInt(r1);
    if (r1 < 18.5) {
      document.querySelector(".para").textContent = "You are underweight";
    } else if (r1 >= 18.5 && r1 <= 24.9) {
      document.querySelector(".para").textContent = "Your weight is normal";
    } else if (r1 >= 25 && r1 <= 29.9) {
      document.querySelector(".para").textContent = "You are overweight";
    } else {
      document.querySelector(".para").textContent = "You are over over weight";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".para").value = "0.0";
  document.querySelector("#height").value = "0.0";
  document.querySelector("#height1").value = "0.0";
  document.querySelector("#weight").value = "0.0";
  document.querySelector('#result1').value="0.0";
});
