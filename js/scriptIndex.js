function irCrearNoticia() {
    window.location.href = "crearNoticia.html"
}

//esperar al dom cargado para renderizar las noticias
document.addEventListener('DOMContentLoaded', iniciar);

function iniciarBotones() {
    const btnInicio = document.querySelector("#inicio");
    if (btnInicio) {
        btnInicio.addEventListener("click", clickInicio);
    }

    const btnBuscar = document.getElementById('btn-buscar');
    if (btnBuscar) {
        btnBuscar.addEventListener('click', buscarNoticia);
    }
}

function iniciarEventosBusqueda() {
    const inputBusqueda = document.getElementById('input-busqueda');
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                buscarNoticia();
            }
        });
    }
}

function clickInicio() {
    renderNoticias();
}

function iniciar() {
    const existeContenedorNoticias = document.getElementById('noticiasContainer');
    if (existeContenedorNoticias) {
        renderNoticias();
    }

    iniciarBotones();
    iniciarEventosBusqueda();
}




// Función para obtener las noticias (simulación de una API)
function getNoticias() {
    const noticias = [
        {
            "titulo": "Nuevo encuentro deportivo entre gente de la región",
            "tema": "Deportes",
            "descripcion": "Un evento deportivo que reúne a los mejores atletas de la región.",
            "cuerpo": "La Universidad Nacional de General Sarmiento fue la anfitriona del primer encuentro deportivo Universitario del 2025. En dicho espacio recibió a las comunidades de otras universidades de la región. En esta oportunidad, se desarrollaron ochos disciplinas en simultáneo con la presencia de representantes de la Universidades de Moreno; de Luján (y sus sedes de San Miguel y Campana); de Hurlingham (UNAHUR); y el Polo de Educación Superior de Escobar (PES). En el evento y con modalidades mixto, femenino y masculino; las categorías deportivas presentes fueron: ajedrez; basquetbol 3×3, hockey seven; fútbol 11 y 7; pádel; tenis de mesa; metegol;  y voleibol.Desde la organización se comentó que el evento finalizó en “gran camaradería y con el tercer tiempo.",
            "fecha": "16-05-2025",
            "direccion": "Sarratea 1100, Malvinas Argentinas",
            "img": "./img/noticia1.jpeg",
            "lat": -34.5218713,
            "long": -58.6981601
        },
        {
            "titulo": "Nueva obra de pavimentación en la ciudad de Villa de Mayo",
            "tema": "Gobierno",
            "descripcion": "Una nueva obra de pavimentación que mejorará la calidad de vida de los vecinos.",
            "cuerpo": "Se trata de dos cuadras en la calle Godoy Cruz, que concretan con la traza de pavimentación desde Campo Rossi hasta Av. Presidente Perón”, explicó Nardini y continuó: “Teniendo en cuenta que las vecinas y los vecinos de este lugar lo venían pidiendo hace mucho tiempo y que hoy la obra está comenzando. En un principio se trabajó en la cañería de cloacas y ahora con el pavimento quedará completa la accesibilidad",
            "fecha": "14-05-2025",
            "direccion": "Sanabria 3900, Malvinas Argentinas",
            "img": "./img/noticia2.jpg",
            "lat": -34.5058151,
            "long": -58.67484
        },
        {
            "titulo": "2° Feria Regional de Ciencia y Tecnología",
            "tema": "Educación",
            "descripcion": "La intendenta interina de Malvinas Argentinas, estuvo presente en el primer día de la 2° Feria Regional de Ciencia y Tecnología que se realiza en Malvinas Argentinas, junto al ministro de Ciencia, Tecnología e Innovación de la Nación",
            "cuerpo": "El objetivo es promover el desarrollo tecnológico de la región, proporcionar un lugar de encuentro, una herramienta de integración social que articula el conocimiento de los distintos actores que impulsan el desarrollo científico-tecnológico, y que fomenta la capacidad de investigación en niños, jóvenes y adultos",
            "fecha": "07-05-2025",
            "direccion": "José Darragueira 600, Malvinas Argentinas",
            "img": "./img/noticia3.jpg",
            "lat": -34.5203913,
            "long": -58.7108652
        },
        {
            "titulo": "Jornada gratuita por el Día Mundial de la Voz",
            "tema": "Salud",
            "descripcion": "En el marco del Día Mundial de la Voz, el Hospital de Trauma y Emergencias Dr. Federico Abete, ubicado en la ciudad de Ing. Pablo Nogués, llevó adelante una nueva jornada abierta a la comunidad para el cuidado de la salud vocal",
            "cuerpo": "Durante la jornada se ofrecieron de manera gratuita estudios de cuerdas vocales, evaluaciones fonoaudiológicas y una charla informativa a cargo de especialistas, con el objetivo de detectar posibles patologías y promover el uso saludable de la voz. La campaña estuvo destinada a toda la comunidad, pero especialmente dirigida a quienes notan cambios persistentes en su voz, ya que esos signos pueden ser indicio de afecciones que requieren atención.",
            "fecha": "03-05-2025",
            "direccion": "Bailén 2050, Malvinas Argentinas",
            "img": "./img/noticia4.jpeg",
            "lat": -34.4955264,
            "long": -58.7094351
        },
        {
            "titulo": "“Malvinas Limpia” y un nuevo paso en materia del cuidado del medio ambiente",
            "tema": "Medio Ambiente",
            "descripcion": "El Municipio de Malvinas Argentinas acaba de incorporar maquinaria para procesar los restos de poda que se encuentran en la vía pública.",
            "cuerpo": "Luego de que esta nueva maquinaria procesa las ramas, hojas y troncos, se obtiene abono de origen orgánico que es utilizado como insumo para tareas de paisajismo en diferentes espacios verdes del distrito y también para abastecer al Vivero Municipal que se encuentra dentro del Predio Municipal de Malvinas.",
            "fecha": "26-04-2025",
            "direccion": null,
            "img": "./img/noticia5.jpg",
            "lat": null,
            "long": null
        },
        {
            "titulo": "“Estación Ajedrez”, una propuesta para acercar el juego con la comunidad",
            "tema": "Cultura",
            "descripcion": "A fines del 2024, nació ASoMA (Ajedrez Social de Malvinas Argentinas), una agrupación integrada por ajedrecistas y vecinos.",
            "cuerpo": "Una de las propuestas que está llevando adelante ASOMA es “Estación Ajedrez”. Los integrantes de la agrupación, que también integran Movilizar, instalan los tableros durante la semana en las inmediaciones a las estaciones de Los Polvorines.",
            "fecha": "18-04-2025",
            "direccion": null,
            "img": "./img/noticia6.jpeg",
            "lat": null,
            "long": null
        },
        {
            "titulo": "Malvinas Argentinas avanza con más tecnología",
            "tema": "Tecnología",
            "descripcion": "El municipio da un paso adelante en modernización. Ahora, los vecinos pueden acceder a información y servicios de manera más rápida y sencilla.",
            "cuerpo": "El distrito presenta Malvinas Más Digital, una iniciativa que busca mejorar la gestión pública mediante el uso de tecnología innovadora. Con inteligencia artificial y análisis de datos, este entorno digital agiliza los trámites, optimiza la comunicación y permite ofrecer mejores servicios municipales.",
            "fecha": "10-04-2025",
            "direccion": null,
            "img": "./img/noticia7.png",
            "lat": null,
            "long": null
        },
        {
            "titulo": "Monitoreo de 1.200 cámaras: Malvinas Argentinas inauguró Polo de Seguridad",
            "tema": "Seguridad",
            "descripcion": "El complejo cuenta con un nuevo Centro de Monitoreo que se desarrolla en Ing. Pablo Nogués y permitirá albergar más de 1.200 cámaras de vigilancia. Incorpora, a su vez, un edificio propio para Gendarmería y otro para Defensa Civil y Emergencias.",
            "cuerpo": "El Municipio de Malvinas Argentinas inauguró el nuevo Polo de Seguridad, que se encuentra ubicado en la localidad de Ing. Pablo Nogués, como parte fundamental del desarrollo de su política de prevención y refuerzo de la seguridad en el distrito",
            "fecha": "25-02-2025",
            "direccion": "Av. del Sesquicentenario 1860, Pablo Nogués, Malvinas Argentinas",
            "img": "./img/noticia8.jpg",
            "lat": -34.4962933122015,
            "long": -58.7072972809045
        },
        {
            "titulo": "Se llevó a cabo un nuevo encuentro de MA Emprende",
            "tema": "Comunidad",
            "descripcion": "Es un espacio de reunión para que los emprendedores se conozcan y generen intercambios. El objetivo es acompañar y fomentar los emprendimientos. Se realizó en las instalaciones de la Dirección General de Cultura.",
            "cuerpo": "Se llevó a cabo un nuevo encuentro del Programa MA Emprende, el cual fomenta los espacios de reunión para que los emprendedores malvinenses se conozcan, muestren lo que hacen y se generen intercambios entre ellos. El objetivo es acompañar y fomentar los emprendimientos de la comunidad.",
            "fecha": "15-02-2025",
            "direccion": "General Lavalle 2015, José C. Paz, Malvinas Argentinas",
            "img": "./img/noticia9.jpg",
            "lat": -34.5239456193878,
            "long": -58.7521217979592
        }

    ];
    return noticias;
}

function mostrarNoticias(noticias) {
    const contenedor = document.getElementById('noticiasContainer');
    contenedor.innerHTML = '';

    if (noticias.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron noticias para esa búsqueda.</p>';
        return;
    }

    noticias.forEach((noticia, index) => {
        const article = document.createElement('article');
        article.classList.add('noticia');
        article.tabIndex = 0; // para que sea accesible con teclado
        article.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p><strong>Tema:</strong> ${noticia.tema}</p>
            <p>${noticia.descripcion}</p>
            <small>Fecha: ${noticia.fecha}</small>
        `;

        // Al hacer click, abrir modal con esa noticia
        article.addEventListener('click', () => abrirModal(noticia));

        // También puede abrirse con Enter (accesibilidad)
        article.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') abrirModal(noticia);
        });

        contenedor.appendChild(article);
    });
}

function buscarNoticia() {
    const termino = normalizarTexto(document.getElementById('input-busqueda').value);
    const noticias = getNoticias();
    const container = document.getElementById('noticiasContainer');
    container.innerHTML = '';

    const noticiasFiltradas = noticias.filter(noticia =>
        normalizarTexto(noticia.titulo).includes(termino) ||
        normalizarTexto(noticia.tema).includes(termino) ||
        normalizarTexto(noticia.descripcion).includes(termino)
    );

    noticiasFiltradas.forEach((noticia) => {
        const card = document.createElement('div');
        card.classList.add('noticia-card');

        card.innerHTML = `
            <img src="${noticia.img ? noticia.img : 'default.jpg'}" alt="${noticia.titulo}" class="noticia-img" />
            <h3>${noticia.titulo}</h3>
            <p><strong>${noticia.tema}</strong> </p>
            <p>${noticia.descripcion}</p>
            <p><em>${noticia.fecha}</em></p>
        `;
        container.appendChild(card);
        card.addEventListener('click', () => abrirDetalleNoticia(noticia));
    });

    if (noticiasFiltradas.length === 0) {
        container.innerHTML = '<p>No se encontraron noticias que coincidan con la búsqueda.</p>';
    }
}

// Por si el usuario no tiene ganas de poner tildes
function normalizarTexto(texto) {
    return texto
        .normalize('NFD')                 // descompone letras y tildes
        .replace(/[\u0300-\u036f]/g, '') // elimina los signos diacríticos
        .toLowerCase();
}

function renderNoticias() {
    const noticias = getNoticias();
    const container = document.getElementById('noticiasContainer');
    container.innerHTML = '';

    noticias.forEach((noticia) => {
        const card = document.createElement('div');
        card.classList.add('noticia-card');

        card.innerHTML = `
            <img src="${noticia.img ? noticia.img : 'default.jpg'}" alt="${noticia.titulo}" class="noticia-img" />
            <h3>${noticia.titulo}</h3>
            <p><strong>${noticia.tema}</strong> </p>
            <p>${noticia.descripcion}</p>
            <p><em>${noticia.fecha}</em></p>
        `;
        container.appendChild(card);
        card.addEventListener('click', () => abrirDetalleNoticia(noticia));
    });
}



function cambiarRol() {
    const btnRol = document.querySelector("#cambiar-rol");
    const btnCreate = document.querySelector("#crear-noticia");
    btnCreate.toggleAttribute("hidden");

    if(btnRol.dataset.rol === "vecino"){
        btnRol.dataset.rol = "admin";
        btnRol.innerText = "Cambiar a Vecino";
    }else{
        btnRol.dataset.rol = "vecino";
        btnRol.innerText = "Cambiar a Admin";
    }
}
