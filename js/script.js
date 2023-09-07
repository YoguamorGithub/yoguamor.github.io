const slider = document.querySelector('.slider');
const imagenes = document.querySelectorAll('.imagen-slider');
let index = 1;
setInterval(function(){
let percentage = index * -100;
slider.style.transform = "translateX(" + percentage + "%)";
index++;
if( index > imagenes.length - 1){
    index = 0;
}
}, 3000);
const btnSinHover = document.querySelector('.nohovereado');
const btnConHover = document.querySelector('.hovereado');
btnConHover.style.display = "none";

btnSinHover.addEventListener('mouseover', hover)
function hover(){
    btnConHover.style.display = "block";
    btnSinHover.style.display = "none";

}
btnConHover.addEventListener('mouseout', () => {
    btnConHover.style.display = "none";
    btnSinHover.style.display = "block";
})