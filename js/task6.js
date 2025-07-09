const bigImg=document.querySelector("#big-image")
const img1=document.querySelector("#img1")
const img2=document.querySelector("#img2")
const img3=document.querySelector("#img3")
const img4=document.querySelector("#img4")
const img5=document.querySelector("#img5")
const btnRight=document.querySelector("#btn-right")
const btnLeft=document.querySelector("#btn-left")

img1.addEventListener("click", ()=>{
    bigImg.src=img1.src
})
img2.addEventListener("click", ()=>{
    bigImg.src=img2.src
})
img3.addEventListener("click", ()=>{
    bigImg.src=img3.src
})
img4.addEventListener("click", ()=>{
    bigImg.src=img4.src
})
img5.addEventListener("click", ()=>{
    bigImg.src=img5.src
})

btnRight.addEventListener("click", ()=>{
    if  (bigImg.src==img1.src) {
        bigImg.src=img2.src
    }
    else if  (bigImg.src==img2.src) {
        bigImg.src=img3.src
    }
    else if  (bigImg.src==img3.src) {
        bigImg.src=img4.src
    }
    else if  (bigImg.src==img4.src) {
        bigImg.src=img5.src
    }
    else if  (bigImg.src==img5.src) {
        bigImg.src=img1.src
    }
})

btnLeft.addEventListener("click", ()=>{
    if  (bigImg.src==img5.src) {
        bigImg.src=img4.src
    }
    else if  (bigImg.src==img4.src) {
        bigImg.src=img3.src
    }
    else if  (bigImg.src==img3.src) {
        bigImg.src=img2.src
    }
    else if  (bigImg.src==img2.src) {
        bigImg.src=img1.src
    }
    else if  (bigImg.src==img1.src) {
        bigImg.src=img5.src
    }
})