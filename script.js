// let text = document.querySelector('#text');
// let btn = document.querySelector('.btn');

// text.addEventListener('input', function() {
//     localStorage.setItem('textArea', text.value);
// });

// btn.addEventListener('click', function() {
//     localStorage.clear();
//     text.value = localStorage.getItem('textArea');

// });

// function init() {
//     text.value = localStorage.getItem('textArea');
// }



// let text = document.querySelector('#text');

// function init() {
// const STORAGE_COUNTER = 'count-number';
// let count = sessionStorage.getItem(STORAGE_COUNTER);
// if (count === null) {
// sessionStorage.setItem(STORAGE_COUNTER, 1);
// return;
// }
// count = Number.parseInt(count);
// count = count + 1; // count++;
// sessionStorage.setItem(STORAGE_COUNTER, count);
// text.value = `Hello ${sessionStorage.getItem(STORAGE_COUNTER)} time!` ;

// }


// init();



<<<<<<< HEAD
// let text = document.querySelector('#text');
// let btn = document.querySelector('.btn');


// function init() {
// const STORAGE_COUNTER = 'count-number';
// let count = localStorage.getItem(STORAGE_COUNTER);
// if (count === null) {
//     localStorage.setItem(STORAGE_COUNTER, 1);
//     alert('Hello bro');
//     return;
// } else if(count % 2 == 0) {
//     alert('Hello bro');
// }
// count = Number.parseInt(count);
// count++; // count++;
// localStorage.setItem(STORAGE_COUNTER, count);
// text.value = `Hello ${localStorage.getItem(STORAGE_COUNTER)} time!` ;
// // if(count % 2 != 0 || count == 1) {
// //     alert('Hello bro');
// // }

// }


// init();

// btn.addEventListener('click', function() {
//     localStorage.clear();
//     text.value = localStorage.getItem('textArea');

// });



// sam 3


// метод for

// let arr = [1, 2, 3, 4, 1234];
// let sum = 0;
// let multiple = 1;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     multiple *= arr[i]; 
// }

// console.log(`Сумма всех элементов массива = ${sum}`);
// console.log(`Произведение всех элементов массива = ${multiple}`);
=======
let text = document.querySelector('#text');
let btn = document.querySelector('.btn');


function init() {
const STORAGE_COUNTER = 'count-number';
let count = localStorage.getItem(STORAGE_COUNTER);
if (count === null) {
    localStorage.setItem(STORAGE_COUNTER, 1);
    alert('Hello bro');
    return;
} else if(count % 2 == 0) {
    alert('Hello bro');
}
count = Number.parseInt(count);
count++; // count++;
localStorage.setItem(STORAGE_COUNTER, count);
text.value = `Hello ${localStorage.getItem(STORAGE_COUNTER)} time!` ;
>>>>>>> master


<<<<<<< HEAD
// метод forEach

let arr = [1, 2, 3, 4, 1234];
let sum = 0;
let multiple = 1;
=======
init();
>>>>>>> master

arr.forEach(function(item) {
    sum += item;
    multiple *= item; 
});

console.log(`Сумма всех элементов массива = ${sum}`);
console.log(`Произведение всех элементов массива = ${multiple}`);