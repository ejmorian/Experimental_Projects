const menuBar = document.querySelector('.menuBar');
const navBar = document.querySelector('.navBar');

let toggle = false;

menuBar.addEventListener('click', ()=>{
    console.log('buttonCLicked')

    if (toggle == false){
        navBar.style.right = '0rem';
    
        menuBar.classList.add('bounceAnim');
        menuBar.classList.remove('bounceAnimTwo');
       
        toggle = true;
        console.log(toggle);

    } else if (toggle == true){
        menuBar.classList.remove('bounceAnim');
        menuBar.classList.add('bounceAnimTwo');

        navBar.style.right = '-20rem';
        toggle = false
        console.log(toggle);
    }
})