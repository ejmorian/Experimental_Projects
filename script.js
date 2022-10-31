let correctNumber;
let attempt_remaining = 9;

function randomnumber() {
correctNumber = Math.floor(Math.random() * 100) + 1;
return parseInt(correctNumber);
}

randomnumber()

const submitButton = document.querySelector('.guess_submit');
const inputField = document.querySelector('#guess_number');
const feedback = document.querySelector('.feedback');
const attemptCount = document.querySelector('.attempt_count');

attemptCount.style.color = 'red';

console.log(correctNumber);

submitButton.addEventListener('click', e => {
  let guess_number = parseInt(inputField.value);


  if(attempt_remaining >= 0){

    if (guess_number == correctNumber){
      feedback.textContent = "Congratulation you've guessed it, refresh to start again...";
      feedback.style.color= 'green';
      attemptCount.textContent= ('attempt: ' + attempt_remaining);
      correctNumber = NaN;
      attempt_remaining = NaN;
    }
    else if (guess_number > correctNumber && attempt_remaining != -1) {
      feedback.textContent = 'The number you chose is too high';
      feedback.style.color= 'red';
      attemptCount.textContent= ('attempt: ' + attempt_remaining);
      attempt_remaining--;
  
    }
    else if (guess_number < correctNumber && attempt_remaining != -1){
      feedback.textContent = 'The number you chose is too low';
      feedback.style.color= 'red';
      attemptCount.textContent= ('attempt: ' + attempt_remaining);
      attempt_remaining--;
  
    }
  } 
  else if (attempt_remaining == -1 && guess_number == correctNumber){
    feedback.textContent = "Congratulation you've guessed it, refresh to start again...";
    correctNumber = NaN;
    attempt_remaining = NaN;
  }
  else if (attempt_remaining == -1 && guess_number != correctNumber){
    feedback.textContent = "No more attempts left... please try again later ";
    feedback.style.color= 'red';
  }


})

inputField.addEventListener('keypress', e =>{
  if (e.key === "Enter"){
    submitButton.click();
  }
})

