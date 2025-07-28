let mapa;

function abrirDetalleNoticia(noticia) {
    event.preventDefault();
    document.getElementById('modalTitulo').innerText = noticia.titulo;
    document.getElementById('modalImg').src = noticia.img || 'default.jpg';
    document.getElementById('modalTema').innerHTML = `<strong>${noticia.tema}</strong>`;
    document.getElementById('modalDescripcion').innerText = noticia.descripcion;
    document.getElementById('modalFecha').innerHTML = `<em>${noticia.fecha}</em>`;
    document.getElementById('modalCuerpo').innerHTML = noticia.cuerpo;

    
    if (noticia.direccion !== null && noticia.lat !== 0 && noticia.long !== 0) {
        document.getElementById("modalContenedorDireccion").style.display = "block";
        document.getElementById("modalDireccion").innerHTML = noticia.direccion;
        abrirMapa(noticia.lat, noticia.long, noticia.titulo); 
        document.getElementById("modalMapa").style.display = "block";
        

        setTimeout(() => {
        mapa.invalidateSize();
        }, 300);
    } else {
       document.getElementById("modalContenedorDireccion").style.display = "none";
       document.getElementById("modalDireccion").innerHTML = "";
        document.getElementById("modalMapa").style.display = "none";
    }

    abrirModal();
}

function abrirModal() {
    const modal = document.getElementById('container-modal');
    modal.classList.add('visible');

    // Cerrar haciendo clic fuera del modal
    modal.addEventListener('click', (e) => {
        const contentModal = document.getElementById('content-modal');
        if (!contentModal.contains(e.target)) {
            cerrarModal();
        }
    });

    // Cerrar con la X
    const cerrarBtn = document.getElementById('cerrarModal');
    cerrarBtn.addEventListener('click', cerrarModal);
}

function cerrarModal() {
    cerrarMapa();
    const modal = document.getElementById('container-modal');
    modal.classList.remove('visible');
}

function abrirMapa(lat, long, titulo) {
    const mapaDiv = document.getElementById('modalMapa');
    mapaDiv.innerHTML = ''
    if (mapa){
        mapa.remove();
    }

    mapa = L.map(mapaDiv).setView([lat, long], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapa);

    L.marker([lat, long]).addTo(mapa).bindPopup(titulo).openPopup();
}

function cerrarMapa() {
    if (mapa) {
        mapa.remove();
        mapa = null;
    }
}
