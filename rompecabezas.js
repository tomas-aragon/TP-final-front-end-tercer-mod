let pieza = document.getElementsByClassName('rompe-imagen')
let destino = document.getElementsByClassName('container-one')
let miIDOrigen;
let miIDDestino;
let misrc;

for (i = 0; i < pieza.length; i++){
    pieza[i].addEventListener('dragstart', (evento)=>{
    miIDOrigen = evento.target.id;
    misrc = evento.target.src;
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
    miIDDestino = evento.target.id
    console.log(evento)
    })
}