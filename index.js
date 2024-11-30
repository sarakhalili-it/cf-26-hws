let counter = 0;
const formatDateString = (str) =>
  str.slice(0, 4) + "-" + str.slice(4, 6) + "-" + str.slice(6);

function isValidDateString(str) {
  if (str.length != 8) {
    return false;
  }

  if (str[0] === "0") {
    return false;
  }

  const isAllCharIsNumber = str
    .trim()
    .split("")
    .map((n) => parseInt(n))
    .every((n) => !isNaN(n));

  if (!isAllCharIsNumber) {
    return false;
  }

  const month = parseInt(str.slice(4, 6));
  if (!(1 <= month && month <= 12)) {
    return false;
  }

  const day = parseInt(str.slice(6));
  if (!(1 <= day && day <= 31)) {
    return false;
  }

  return true;
}
function handleSubmit() {
  let userFirstName = document.querySelector("#user-first-name");
  let userLastName = document.querySelector("#user-last-name");
  let date = document.querySelector("#user-date");
  let tr = document.createElement("tr");
  tr.classList.add(
    "border-b",
    "border-gray-600",
    "odd:bg-gray-800",
    "even:bg-gray-700"
  );
  //چک کن مقدار نام خالی نباشد
  let tdFirstName = document.createElement("td");
  if (!userFirstName.value.trim() == "") {
    tdFirstName.textContent = userFirstName.value;
  } else {
    alert("مقدار نام را وارد کنید");
    return;
  }
  tdFirstName.classList.add("px-6", "py-4");
  //چک کن مقدار فامیلی خالی نباشد
  let tdLastName = document.createElement("td");
  if (!userLastName.value.trim() == "") {
    tdLastName.textContent = userLastName.value;
  } else {
    alert("مقدار فامیلی را وارد کنید");
    return;
  }
  tdLastName.classList.add("px-6", "py-4");
  //چک کردن مقدار تاریخ
  let tdDate = document.createElement("td");
  if (isValidDateString(date.value)) {
    tdDate.textContent = formatDateString(date.value);
  } else {
    alert("مقدار 8 عدد برای تاریخ وارد کنید و لطفا با صفر شروع نشود");
    return false;
  }
  tdDate.classList.add("px-6", "py-4");
  //Global ID
  let tdCounter = document.createElement("td");
  tdCounter.classList.add("px-6", "py-4", "font-medium", "text-white");
  counter += 1;
  tdCounter.innerHTML = counter;

  let td = document.createElement("td");
  td.classList.add("px-6", "py-4");
  tr.appendChild(tdCounter);
  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdDate);
  tr.appendChild(td);
  document.getElementById("users").appendChild(tr);
  userFirstName.value = "";
  userLastName.value = "";
  date.value = "";
}
let btn = document.querySelector("#submit-btn");
btn.addEventListener("click", handleSubmit);
