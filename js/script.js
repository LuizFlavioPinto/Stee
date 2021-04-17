/* Bloquear rolagem da página ao abrir barra lateral*/

const checkBox = document.getElementById('check')

const blockScrollbar = () => {
    const html = document.getElementById('html')
    checkBox.checked == true? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll'  
}

const releaseScrollbar = () => {
    checkBox.checked = false
    html.style.overflowY = 'scroll' 
}

checkBox.addEventListener('change', blockScrollbar)

/* Slider */

let time = 2000, 
    currentImage = 0,
    images = document.querySelectorAll('.slider img'),
    max = images.length

function nextImage () {

    images[currentImage].classList.remove('selected')

    currentImage ++

    currentImage = currentImage >= max ? 0 : currentImage
    images[currentImage].classList.add('selected')

}

function start () {
    setInterval(() => nextImage(), time)
}

window.addEventListener('load', start)