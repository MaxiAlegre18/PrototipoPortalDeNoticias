function tomarInformacionCrearNoticia() {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const cuerpo = document.getElementById('cuerpo').value;
    const tema = document.getElementById('tema').value;
    const fecha = document.getElementById('fecha').value;
    
    // Detalle direccion:
    const direccion = obtenerDireccionNormalizadaSeleccionada();

    // Coordenadas:
    let coordenadas = {};
    if (direccion !== null) {
        coordenadas = obtenerCoordenadasDeDireccionNormalizada(direccion);
    } else {
        coordenadas = {
            "lat": 0,
            "long": 0
        }
    }

    // Cargar URL temporal para alojar la imagen
    const imagenInput = document.getElementById('imagen');
    const archivoImagen = imagenInput.files[0];
    const imagenURL = archivoImagen ? URL.createObjectURL(archivoImagen) : 'default.jpg';
    

    const noticia =
    {
        "titulo": titulo,
        "tema": tema,
        "descripcion": descripcion,
        "cuerpo": cuerpo,
        "fecha": fecha,
        "direccion": direccion,
        "img": imagenURL,
        "lat": coordenadas.lat,
        "long": coordenadas.long
    };

    abrirDetalleNoticia(noticia);

}

function obtenerDireccionNormalizadaSeleccionada() {
    const opcionSeleccionada = document.querySelector('input[name=dirList_direccion]:checked');
    if (opcionSeleccionada == null) {
        return null;
    } else {
        return opcionSeleccionada.value;
    }
}

// SERVICIO USIG: NORMALIZAR DIRECCIONES

function normalizarDireccion(event, addressId, listId) {
    event.preventDefault();
    const direccion = document.getElementById(addressId).value;
    const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(direccion)}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => listarDirecciones(data, listId));
}

function esDireccionValida(respuesta) {
    if (!respuesta.direccionesNormalizadas || respuesta.direccionesNormalizadas.length === 0) {
        alert("No se encontraron resultados para la dirección ingresada.");
        return false;
    }

    const tipoDireccion = respuesta.direccionesNormalizadas[0].tipo;
    if (tipoDireccion !== "calle_altura") {
        if (tipoDireccion === "calle_y_calle") {
            alert("La dirección ingresada es una intersección! Solo ingresar calle y altura.");
            return false;
        }
        alert("Debe ingresar una calle con altura!");
        return false;
    }
    return true;
}

function listarDirecciones(respuesta, listId) {
    if (!esDireccionValida(respuesta)) return;

    let lista = document.getElementById(listId);
    lista.innerHTML = '';

    respuesta.direccionesNormalizadas.forEach((direccion, index) => {
        let item = document.createElement('li');
        let label = document.createElement('label');
        let input = document.createElement('input');

        input.type = 'radio';
        input.name = `${listId}_direccion`;
        input.value = direccion.direccion;
        input.id = `${listId}_direccion${index}`;

        label.htmlFor = `${listId}_direccion${index}`;
        label.textContent = direccion.direccion;
        label.classList.add('labelDireccion');

        item.appendChild(input);
        item.appendChild(label);
        lista.appendChild(item);
    });
}
// SERVICIO USIG: OBTENER COORDENADAS DE UNA DIRECCION NORMALIZADA

function obtenerCoordenadasDeDireccionNormalizada(direccionNormalizada) {
    let xhttp = new XMLHttpRequest();
    const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(direccionNormalizada)}`;
    let coordenadasDireccionNormalizada  = {};

    xhttp.open("GET", url, false);
    xhttp.send();

    if (xhttp.status == 200) {
        let respuesta = JSON.parse(xhttp.responseText);
        coordenadasDireccionNormalizada = obtenerCoordenadas(respuesta);
    }
    return coordenadasDireccionNormalizada;
}

function obtenerCoordenadas(respuesta) {
    let coordenadas = {};
    if (respuesta.direccionesNormalizadas.length == 0) {
        coordenadas = {
            "lat": 0,
            "long": 0
        };
        return coordenadas;
    }
    respuesta.direccionesNormalizadas.forEach((direccion) => {
        coordenadas = {
            "lat":direccion.coordenadas.y,
            "long":direccion.coordenadas.x
        }
    });
    return coordenadas;
}