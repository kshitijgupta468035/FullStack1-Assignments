let a = document.getElementById("heading");

a.style.color = "red";

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let number = document.getElementById("number");

if (number.innerHTML === "0") {
  sub.disabled = true;
}

add.addEventListener("click", function() {

  let max = 19;
  if (Number(number.innerHTML) <= max) {
    var increase = Number(number.innerHTML) + 1;
    number.innerHTML = increase;
  }

  if (Number(number.innerHTML) > 0) {
    sub.disabled = false;
  }
});


sub.addEventListener("click", function() {
  let decrease = Number(number.innerHTML) - 1;
  number.innerHTML = decrease;
  if (number.innerHTML === "0") {
    sub.disabled = true;
  }
})
