//numbers
const pointBtn = document.querySelector('.pointBtn');
const zeroBtn = document.querySelector('.zeroBtn');
const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
const fourBtn = document.querySelector('.fourBtn');
const fiveBtn = document.querySelector('.fiveBtn');
const sixBtn = document.querySelector('.sixBtn');
const sevenBtn = document.querySelector('.sevenBtn');
const eightBtn = document.querySelector('.eightBtn');
const nineBtn = document.querySelector('.nineBtn');

//operators
const acBtn = document.querySelector('.acBtn');
const delBtn = document.querySelector('.delBtn');
const plusBtn = document.querySelector('.plusBtn');
const minusBtn = document.querySelector('.minusBtn');
const divideBtn = document.querySelector('.divideBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');

const displayResult = document.querySelector('.result');


//number button events
oneBtn.addEventListener('click', ()=> {
    displayResult.value += 1

})
twoBtn.addEventListener('click', ()=> {
    displayResult.value += 2

})
threeBtn.addEventListener('click', ()=> {
    displayResult.value += 3

})
fourBtn.addEventListener('click', ()=> {
    displayResult.value += 4

})
fiveBtn.addEventListener('click', ()=> {
    displayResult.value += 5

})
sixBtn.addEventListener('click', ()=> {
    displayResult.value += 6

})
sevenBtn.addEventListener('click', ()=> {
    displayResult.value += 7

})
eightBtn.addEventListener('click', ()=> {
    displayResult.value += 8

})
nineBtn.addEventListener('click', ()=> {
    displayResult.value += 9

})
zeroBtn.addEventListener('click', ()=> {
    displayResult.value += 0

})


acBtn.addEventListener('click', ()=> {


})
delBtn.addEventListener('click', ()=> {

})
divideBtn.addEventListener('click', ()=> {


})
multiplyBtn.addEventListener('click', ()=> {


})
plusBtn.addEventListener('click', ()=> {



})
minusBtn.addEventListener('click', ()=> {


})
