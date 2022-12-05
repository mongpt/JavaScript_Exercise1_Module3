

document.getElementById('start').addEventListener('click', calculation);
function calculation(a, b) {
  a = parseFloat(document.getElementById('num1').value);
  b = parseFloat(document.getElementById('num2').value);
  var oper = document.getElementById('operation').value;
  var result;
  switch(oper) {
    case 'add':
      result = a + b;
      break;
    case 'sub':
      result = a - b;
      break;
    case 'multi':
      result = a * b;
      break;
    case 'div':
      result = a / b;
      break;
  }
  document.getElementById('result').innerHTML = result;
}
