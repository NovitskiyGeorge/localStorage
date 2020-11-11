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

}

init();

btn.addEventListener('click', function() {
    localStorage.clear();
    text.value = localStorage.getItem('textArea');

});