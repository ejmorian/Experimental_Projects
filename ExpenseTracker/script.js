//Get Input Elements
const d = document;
const dateInput = d.querySelector('.dateInput');
const descInput = d.querySelector('.descInput');
const priceInput = d.querySelector('.priceInput');
const addButton = d.querySelector('.addButton');
const tableBody = d.querySelector('.tableBody');
const formBox = d.querySelector('.formBox');

function addLog(){
    const tableRow = d.createElement('tr');
    const dateData = d.createElement('td');
    const descData = d.createElement('td');
    const priceData = d.createElement('td');
    const deleteData = d.createElement('td');
    const deleteButton = d.createElement('button');

    tableRow.classList.add('expenseLog');
    dateData.classList.add('expenseDate');
    descData.classList.add('descData');
    priceData.classList.add('priceData');
    deleteData.classList.add('deleteData');
    deleteButton.classList.add('deleteButton');

    deleteButton.textContent = 'Delete';

    dateData.textContent = dateInput.value;
    descData.textContent = descInput.value;
    priceData.textContent = '$' + priceInput.value;

    deleteButton.addEventListener('click', ()=>{
        tableRow.remove();
    })

    deleteData.append(deleteButton)
    tableRow.append(dateData,descData,priceData,deleteData);
    tableBody.append(tableRow)
}

formBox.addEventListener('submit', e => e.preventDefault());

function hasValue(){
    
    if(dateInput.value != '' &&
    descInput.value != '' &&
    priceInput.value != ''){
        return true;
    } else{
        console.log('invalid');
    }

}

addButton.addEventListener('click', ()=>{
    if(descInput.value !== null && hasValue()){
        addLog();
    } else{
        alert('Invalid Expense')
    }
});