let quiz_form = document.querySelector(".quiz");
let submit_button = document.querySelector("#btn");
let output = document.querySelector(".output");

let correct_answers = ["90", "right angled", "equilateral", " one right angle", "12, 16, 20", "100°"];

function calculateScore() {
  let score = 0;
  let counter = 0;
  let form = new FormData(quiz_form);

  for (let value of form.values()) {
    console.log(value);
    if (value === correct_answers[counter]) score = score + 1;
    counter = counter + 1;
  }

  output.innerText = `your score is ${score}`;
}

submit_button.addEventListener("click", calculateScore);
