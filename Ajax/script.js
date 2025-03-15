let peticion = new XMLHttpRequest();
peticion.onreadystatechange = continuar;
peticion.open('GET', "peliculas.xml");
peticion.send();

function continuar() {
    if (peticion.readyState === 4 && peticion.status === 200) {
        let peliculas = peticion.responseXML;
        let pelis = peliculas.querySelectorAll("pelicula");
        console.log(pelis.length);

        let listaCarteles = document.querySelector("#cartelera");

        // Cargar las películas en la lista
        for (let i = 0; i < pelis.length; i++) {
            let item = document.createElement("li");

            // Crear la imagen del cartel
            let foto_cartel = document.createElement("img");
            foto_cartel.src = "imagenes/" + pelis[i].querySelector("cartel").textContent;

            // Crear el título de la película
            let titulo_peli = document.createElement("span");
            titulo_peli.innerHTML = pelis[i].querySelector("titulo").textContent;

            // Agregar la imagen y el título al item de la lista
            item.appendChild(foto_cartel);
            item.appendChild(titulo_peli);
            item.setAttribute("data-index", i); // Agregar el índice como atributo
            listaCarteles.appendChild(item);

            item.addEventListener("click", function () {
                let index = this.getAttribute("data-index");

                // Actualizar la información del video y los detalles
                document.querySelector("#titulo").innerHTML = pelis[index].querySelector("titulo").textContent;
                document.querySelector("#direccion").innerHTML = "Dirección: " + pelis[index].querySelector("direccion").textContent;
                document.querySelector("#duracion").innerHTML = "Duración: " + pelis[index].querySelector("duracion").textContent;
                document.querySelector("#nacionalidad").innerHTML = "Nacionalidad: " + pelis[index].querySelector("nacionalidad").textContent;
                document.querySelector("#artistas").innerHTML = "Artistas: " + pelis[index].querySelector("artistas").textContent;
                document.querySelector("#genero").innerHTML = "Género: " + pelis[index].querySelector("genero").textContent;
                document.querySelector("#sinopsis").innerHTML = "Sinopsis: " + pelis[index].querySelector("sinopsis").textContent;
                document.querySelector("#video").src = pelis[index].querySelector("video").textContent;
            });
        }

        // Iniciar con el primer elemento por defecto
        if (pelis.length > 0) {
            let firstMovie = pelis[0];
            document.querySelector("#titulo").innerHTML = firstMovie.querySelector("titulo").textContent;
            document.querySelector("#direccion").innerHTML = "Dirección: " + firstMovie.querySelector("direccion").textContent;
            document.querySelector("#duracion").innerHTML = "Duración: " + firstMovie.querySelector("duracion").textContent;
            document.querySelector("#nacionalidad").innerHTML = "Nacionalidad: " + firstMovie.querySelector("nacionalidad").textContent;
            document.querySelector("#artistas").innerHTML = "Artistas: " + firstMovie.querySelector("artistas").textContent;
            document.querySelector("#genero").innerHTML = "Género: " + firstMovie.querySelector("genero").textContent;
            document.querySelector("#sinopsis").innerHTML = "Sinopsis: " + firstMovie.querySelector("sinopsis").textContent;
            document.querySelector("#video").src = firstMovie.querySelector("video").textContent;
        }
    }
}
