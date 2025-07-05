const menuBtn=document.querySelector("#menu-btn")
const burgerMenu=document.querySelector("#burger-menu")
const btnClose=document.querySelector("#btn-close")

menuBtn.addEventListener("click", ()=>{
    burgerMenu.style.left="0px"
    console.log(menuBtn.textContent)
})

btnClose.addEventListener("click", ()=>{
    burgerMenu.style.left="-300px"
})