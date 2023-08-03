const btnMega = document.getElementById('gera-mega');
const btnLotofacil = document.getElementById('gera-lotofacil');
const btnLotomania = document.getElementById('gera-lotomania');
const numJogo = document.getElementById('num-jogo');

function gerarNum(qtd, max) {
    let num = [];

    while (num.length < qtd) {
        const gerar = Math.floor(Math.random() * max) + 1;
        if (!num.includes(gerar)) {
            num.push(gerar);
        }
    }



    return num;
}

function balls(value, jogo) {
    let dez = [];
    let numMax = 0;
    const numGeradoContainer = document.createElement('div');
    numGeradoContainer.setAttribute('id', 'num-gerado');

    if (value === 6) numMax = 60
    if (value === 15) numMax = 25
    if (value === 50) numMax = 100
    while (dez.length < value) {
        const gerar = Math.floor(Math.random() * numMax) + 1;
        if (!dez.includes(gerar)) {
            dez.push(gerar);
        }
    }

    dez.sort((a, b) => a - b);

    for (let i = 0; i < value; i++) {
        let ball = document.createElement('div');
        ball.setAttribute('class', `ball ${jogo}`);
        let num = document.createElement('h4');
        num.textContent = dez[i];
        ball.appendChild(num);
        numGeradoContainer.appendChild(ball);
    }

    return numGeradoContainer;
}

function numGerado(value, wi, he) {
    numJogo.innerHTML = '';

    const numGeradoContainer = balls(value, (value === 6 ? 'mega' : (value === 15 ? 'lotofacil' : 'lotomania')));
    numGeradoContainer.style.width = `${wi}px`;
    numGeradoContainer.style.height = `${he}px`;

    const btnLimpaJogo = document.createElement('div');
    btnLimpaJogo.setAttribute('id', 'limpar-jogo')
    btnLimpaJogo.innerHTML = `<button id='limparJogo'>Limpar</button>`;


    numJogo.appendChild(numGeradoContainer);
    numJogo.appendChild(btnLimpaJogo);
}

btnMega.addEventListener('click', () => {
    numJogo.style.display = "flex";
    numGerado(6, 350, 200);
});

btnLotofacil.addEventListener('click', () => {
    numJogo.style.display = "flex";
    numGerado(15, 300, 350);
});

btnLotomania.addEventListener('click', () => {
    numJogo.style.display = "flex";
    numGerado(50, 550, 600);
});

btnLimpa.addEventListener('click', () => {
    numJogo.innerHTML = '';
    numJogo.style.display = 'none';
});
