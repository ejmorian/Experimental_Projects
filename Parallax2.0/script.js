const paraItemOne = document.querySelector('.paraItemOne')
const paraItemTwo = document.querySelector('.paraItemTwo')
const paraItemThree = document.querySelector('.paraItemThree')


console.log(paraItemOne)

window.addEventListener('scroll', e => {
    let scroll = window.pageYOffset;
    let rate = scroll * 1;
    let rateTwo = scroll;
    let rateThree = scroll * -1;

    console.log(window.pageYOffset)

    if (window.pageYOffset < 500){
        paraItemOne.style.transform = "translate3d(0," +rate+ "px" + ", 0)";

      //  paraItemTwo.style.transform = "translate3d(0," +rateTwo+ "px" + ", 0)";
    
    
        paraItemThree.style.transform = "translate3d(0," +rateThree+ "px" + ", 0)";

    } else if (window.pageYOffset > 200){

        
    }
})