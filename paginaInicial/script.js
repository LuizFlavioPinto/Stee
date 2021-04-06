/* Bloquear rolagem da página ao abrir barra lateral*/

const checkBox = document.getElementById('check')

const bloquearRolagem = () => {
    const html = document.getElementById('html')
    checkBox.checked == true? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll'  
}

const liberarRolagem = () => {
    checkBox.checked = false
    html.style.overflowY = 'scroll' 
}

checkBox.addEventListener('change', bloquearRolagem)

/* Slider */

let time = 2000, 
    imagemAtual = 0,
    imagens = document.querySelectorAll('.slider img'),
    max = imagens.length

function proximaImagem () {

    imagens[imagemAtual].classList.remove('selected')

    imagemAtual ++

    imagemAtual = imagemAtual >= max ? 0 : imagemAtual
    imagens[imagemAtual].classList.add('selected')

}

function start () {
    setInterval(() => proximaImagem(), time)
}

window.addEventListener('load', start)

/* Combos */

/* const combos = [
    {
        img: `<img src="" alt="Foto combo">`,
        nome : "combo Cfms",
        preco: 1000
    },
    {
        img: `<img src="" alt="Foto combo">`,
        nome : "combo Master",
        preco : 5000
    },
    {
        img: `<img src="" alt="Foto combo">`,
        nome : "combo estadual",
        preco : 500
    },
    {
        img: `<img src="" alt="Foto combo individual">`,
        nome : "combo individual",
        preco : 300
    }
]


function inicializarCombos () {
    let cardsCombo = document.getElementById('containerProdutos')
    combos.map(combos => {
        cardsCombo.innerHTML += `
            <div class= "produto">

            <img src="" alt="Foto combo individual">
            <h2>Combo: `+combos.nome+`</h2>
            <p> preco: R$`+combos.preco+`</p>

            </div>
        `;

    })
}

inicializarCombos() */