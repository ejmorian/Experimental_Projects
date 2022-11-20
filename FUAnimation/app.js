const letters = document.querySelectorAll('h2')

console.log(letters)

letters.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.add('shake');
        console.log('clicked')
    })
})
