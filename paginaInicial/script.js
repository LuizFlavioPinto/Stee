/* Correção erro menu lateral */

window.onscroll = esconderBarraLateral
let checkBox = document.getElementById('check'),
    lastScrollTop = 0

    
function esconderBarraLateral () {
    if (this.scrollY === lastScrollTop) return;
    
    checkBox.checked && this.scrollY > lastScrollTop ? checkBox.checked = false : checkBox.checked
    lastScrollTop = this.scrollY;
}

/* Slider */

let time = 2000, 
    currentImageIndex = 0,
    images = document.querySelectorAll('.slider img'),
    max = images.length

function proximaImagem () {

    images[currentImageIndex].classList.remove('selected')

    currentImageIndex ++

    currentImageIndex = currentImageIndex >= max ? 0 : currentImageIndex
    images[currentImageIndex].classList.add('selected')

}

function start () {
    setInterval(() => proximaImagem(), time)
}

window.addEventListener('load', start)