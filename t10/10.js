
const form = document.querySelector('form');
const fname = document.querySelector('input[name=firstname]');
const lname = document.querySelector('input[name=lastname]');
form.addEventListener("submit", showResult);
function showResult(event) {
  document.getElementById('target').innerHTML = `Your name is ${fname.value} ${lname.value}`;
  event.preventDefault();
}
