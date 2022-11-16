const toggleMenu = document.querySelector('.toggleMenu');
const toggle = document.querySelector('.toggle');
const navList = document.querySelector('.navList');

    let active = 0;

toggleMenu.addEventListener('click', ()=>{

    if (active === 0){
        navList.style.display = 'flex';
        active = 1;

    } else if (active === 1){
        navList.style.display = 'none';
        active = 0;
    }

    console.log(active)
})