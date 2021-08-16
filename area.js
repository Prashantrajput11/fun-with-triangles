let base = document.getElementById("base");
let height = document.getElementById("height");
let btn = document.getElementById("btn-check");
let show = document.querySelector(".show");

btn.addEventListener("click", function () {
  //check if user has entered valid units
  if (
    base.value < 0 ||
    height.value < 0 ||
    base.value === "" ||
    height.value === ""
  ) {
    validateInputs();
  } else {
    calculateArea();
  }
});

// validation function for inputs
function validateInputs() {
  show.innerText = "please enter valid units";
}

// if valid inputs, calculate area of triangle
function calculateArea() {
  //initialise
  let area_of_triangle;

  area_of_triangle = (1 / 2) * (Number(base.value) * Number(height.value));
  show.innerText = "area : " + area_of_triangle + " square meters";
}
