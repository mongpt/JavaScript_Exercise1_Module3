
document.querySelector('button').addEventListener('click', calculation);
function calculation(a,b) {
  var result;
  var input = document.getElementById('calculation').value;
  if (input.includes("+")) {
    var num = input.split('+');
    result = parseInt(num[0]) + parseInt(num[1]);
  }
  else if (input.includes("-")) {
    var num = input.split('-');
    result = parseInt(num[0]) - parseInt(num[1]);
  }
  else if (input.includes("*")) {
    var num = input.split('*');
    result = parseInt(num[0]) * parseInt(num[1]);
  }
  else if (input.includes("/")) {
    var num = input.split('/');
    result = parseInt(num[0]) / parseInt(num[1]);
  }
  document.getElementById('result').innerHTML = result;
}
