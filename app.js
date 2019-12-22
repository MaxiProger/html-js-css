'use strict';

console.log('init log');

let today = new Date();
let formateDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formateDate;