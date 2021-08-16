let angle_one = document.querySelector("#angle-one");
let angle_two = document.querySelector("#angle-two");
let angle_three = document.querySelector("#angle-three");
let result = document.querySelector(".result");
let check = document.querySelector("#btn");

check.addEventListener("click", function () {
  var a = angle_one.value;
  var b = angle_two.value;
  var c = angle_three.value;

  if (a === "" || b === "" || c === "") {
    validateInputs();
  } else {
    if (
      Number(angle_one.value) +
        Number(angle_two.value) +
        Number(angle_three.value) ===
      180
    ) {
      result.innerText = "These angles make a triangle 🍕";
      result.style.display = "block";
    } else {
      result.innerText = "These angles does not make a triangle";
      result.style.display = "block";
    }
  }
});

// function CheckIfTriangle() {

// }

function validateInputs() {
  result.innerText = "Please enter valid values";
  result.style.display = "block";
}
