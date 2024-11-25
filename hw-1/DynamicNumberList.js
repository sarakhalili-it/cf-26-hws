function renderList(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += `<li class="list-disc text-2xl text-blue-600">${i}</li>`;
  }
  const targetElement = document.querySelector("#books ul");
  targetElement.innerHTML = result;
}
function validation() {
  const input = document.querySelector("#books input");
  const num = Number(input.value);
  const numericExpression = /^[0-9]+$/;
  if (input.value.match(numericExpression)) {
    renderList(num);
  } else {
    alert("please Enter a Number");
  }
  input.value = "";
}
function submit() {
  validation();
}
const btn = document.querySelector("#submit-button");
btn.addEventListener("click", submit);
