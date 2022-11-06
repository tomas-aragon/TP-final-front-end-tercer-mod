let pieza = document.getElementsByClassName('rompe-imagen')
let destino = document.getElementsByClassName('rompe-casilla')
let miIDOrigen;
let miIDDestino;
let miSrc;
let casilleroVacio;

let intArr = [3,1,2];

let ORDEN = [];
let gameOver = false;

for (i = 0; i < pieza.length; i++){
    pieza[i].addEventListener('dragstart', (evento)=>{
    
    evento.dataTransfer.setData('URL', evento.target.src);

    miIDOrigen = evento.target.id;

    casilleroVacio = `casillero-vacio-${miIDOrigen}`;

    console.log(evento);
    })
}
for (i = 0; i < pieza.length; i++){
    pieza[i].addEventListener('dragend', (evento)=>{
        console.log(evento)

    })
}

for (i = 0; i < destino.length; i++){
    destino[i].addEventListener("dragover", (evento)=>{
    evento.preventDefault();
    })
}
for (i = 0; i < destino.length; i++){
    destino[i].addEventListener("drop", (evento)=>{
    miSrc = evento.dataTransfer.getData('URL');

    miIDDestino = evento.target.id
    console.log(miIDDestino)
    document.getElementById(miIDDestino).innerHTML = `<img src=${miSrc} alt="una pieza del rompecabezas" id="${miIDOrigen}">`
    document.getElementById(casilleroVacio).innerHTML = ' '
})
}



document.getElementById('reiniciar').addEventListener('click', ()=>{

    for (i = 0; i < 3; i ++){
        document.getElementsByClassName('rompe-casilla')[i].innerHTML = ' '
        document.getElementsByClassName('rompe-imagen')[i].innerHTML = ` <img src="./imagenes/Rompe-${intArr[i]}.png" alt="Imagen del rompecabezas">`
    }
})

// BUENO EL ROMPECABEZA NO ME QUEDO MUY BIEN, PERO NO SE ME OCURRE COMO MEJORARLO. ABAJO TRATE DE HACER ALGO:


/*

LOGICA DEL JUEGO NO TERMINADA
while(!gameOver){
    if ('zona-' + miIDOrigen == miIDDestino) {
        ORDEN.push(miIDOrigen)
    }
    if (ORDEN == [1,2,3]){
        gameOver = true;
        alert('GANASTE!!!')
    }
}
*/
