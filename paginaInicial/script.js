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