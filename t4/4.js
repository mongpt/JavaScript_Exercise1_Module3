'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for (let item in students) {
  console.log(students[item]['name']);
  console.log(students[item]['id']);
  var opt = document.createElement('option');
  opt.value = students[item]['id'];
  opt.text = students[item]['name'];
  document.getElementById('target').appendChild(opt);
}
