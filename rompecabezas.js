let pieza = document.getElementsByClassName('rompe-imagen')
let destino = document.getElementsByClassName('rompe-casilla')
let miIDOrigen;
let miIDDestino;
let miSrc;

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
    document.getElementById(miIDDestino).innerHTML = `<img src=${miSrc} alt="una pieza del rompecabezas" id="${miIDOrigen}">`
    document.getElementById(casilleroVacio).innerHTML = ' '
})
}