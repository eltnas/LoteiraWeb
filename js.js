const btnMega = document.querySelector('#gera-mega');
const btnLotofacil = document.querySelector('#gera-lotofacil');
const btnLotomania = document.querySelector('#gera-lotomania');
const btnLimpa = document.querySelector('#limparJogo');
const numJogo = document.querySelector('#num-jogo');

function gerarNum(qtd, max) {
    let num = [];

    // Loop para gerar os numeros de acordo com o jogo
    while (num.length < qtd) {
        const gerar = Math.floor(Math.random() * max) + 1;
        if (!num.includes(gerar)) {
            num.push(gerar);
        }
    }

    // Loop para ordenar os numeros dentro do array
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = 1; j < num.length - i; j++) {
            if (num[j - 1] > num[j]) {
                const temp = num[j - 1];
                num[j - 1] = num[j];
                num[j] = temp;
            }
        }
    }
    return num;
}

function balls(value){
    const numGerado = document.querySelector('#num-gerado');
}
function numGerado(wi, he){
    let numGerado = document.createElement('div');
    let limpaJogo = document.createElement('div');
    numGerado.setAttribute('id', 'num-gerado');
    numGerado.style.width = wi;
    numGerado.style.height = he;

    limpaJogo.setAttribute('id', 'limpar-jogo');

    limpaJogo.innerHTML=`<button id="limparJogo">Limpar</button>`

    numJogo.appendChild(numGerado);
    numJogo.appendChild(limpaJogo);

    console.log(numJogo, wi, he)
}

btnMega.addEventListener('click', ()=>{
    let displayStyle = window.getComputedStyle(numJogo);

    if(displayStyle.display == "none"){
        numJogo.style.display = 'flex';
        console.log(numGerado(300,200))
    } else {
        console.log("ja está flex!");
    }
})

btnLotofacil.addEventListener('click', ()=>{
    alert("Lotofacil");
})

btnLotomania.addEventListener('click', ()=>{
    alert("Lotomania");
})

btnLimpa.addEventListener('click', ()=>{
    alert("limpa");
})