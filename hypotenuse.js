let input_one = document.querySelector("#input-one");
let input_two = document.querySelector("#input-two");
let check_hypo = document.querySelector("#btn-check");
let message = document.querySelector(".message");

check_hypo.addEventListener("click", function () {
  let a = input_one.value;
  let b = input_two.value;
  let c;
  let hypotenuse;
  if (a === "" || b === "") {
    console.log(a);
    message.style.display = "block";
    message.innerText = "please enter valid values";
  } else {
    c = a * a + b * b;
    hypotenuse = Math.sqrt(c).toFixed(2);
    console.log(hypotenuse);
    message.style.display = "block";
    message.innerText = hypotenuse;
  }
});
