
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const idPelicula = urlParams.get("pelicula");
console.log(idPelicula)
const key = `cc9c3bf03151f66c4f7931e8ff1281c3`

const urlCastPelicula = `https://api.themoviedb.org/3/movie/${idPelicula}/credits?api_key=${key}`
const urlInfoPelicula = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${key}`

const contenedor = document.getElementById("id-cast");

const descTitulo = document.getElementById("tituloDesc");
const descImg = document.getElementById("imgDesc");
const peliculaDesc = document.getElementById("descPelicula");
fetch(urlInfoPelicula)
.then(res => res.json())  
.then(json => {
  const datos=json;
  console.log(datos)
descTitulo.innerText = datos.title;
const imgPos =`http://image.tmdb.org/t/p/w500${datos.backdrop_path}`;
descImg.src = imgPos;
console.log(descImg)
peliculaDesc.innerText = datos.overview;

})
.catch(err => console.error(err));

//recorremos el cast de las peliculas y las guardamos en un contenedor
fetch(urlCastPelicula)
.then(res => res.json())  
.then(json => {
    const datos=json;
    console.log(datos)
datos.cast.forEach(actor => {
    const imgActor = document.createElement("img")
    const nombreCast = document.createElement("p")
    const urlImg = actor.profile_path;
    if (urlImg !== null ) {
        imgActor.src = `http://image.tmdb.org/t/p/w500${actor.profile_path}`;
    nombreCast.innerText = actor.name
    
    const contenedorImgP = document.createElement("div")
    contenedorImgP.appendChild(imgActor);
    contenedorImgP.appendChild(nombreCast);

    contenedor.appendChild(contenedorImgP);
    }
    






    
    
    
});

})
.catch(err => console.error(err));