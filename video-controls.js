const video = document.getElementById('video-historia')
const duracion = video.duration()

document.getElementById('duracion').innerHTML = `<p>Duracion: ${duracion}</p>`

const reproducir = ()=>{

    video.play();
};

const pausar = () =>{

    video.pause();
};