let pieza = document.getElementsByClassName('rompe-imagen')
let piezaAgarrada;
let destino = document.getElementsByClassName('rompe-casilla')
let casillaElegida;

pieza[0].addEventListener('dragstart', ()=>{
    console.log('arrastrando')
})

pieza[0].addEventListener('dragend', ()=>{
    console.log('soltado')
})


destino[0].addEventListener('drop', ()=>{
    console.log('soltado sobre el destino')
})