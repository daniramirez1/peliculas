// Seleccionamos el contenedor donde se agregarán las etiquetas <p>
const contenedor = document.getElementById("id-contendor");

//cargamos la API
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzljM2JmMDMxNTFmNjZjNGY3OTMxZThmZjEyODFjMyIsIm5iZiI6MTc0MDYyOTYzOC4wNDQsInN1YiI6IjY3YmZlNjg2MDcyYTcwN2FlOTM1OTRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5WzAuPWMF5iSPLXmpTbRspPjN9Ahu72C53vV1k59Bw'
  }
};




//declaramos constantes para obtener la etiqueta desde HTML
const h2 = document.getElementById("miTitulo");
const imgHero = document.getElementById("hero-imagen");
const descripcionHero = document.getElementById("descripcion-hero");



//Se realiza la consulta a la api
fetch(url, options)
// Convertimos la respuesta en formato JSON
  .then(res => res.json())  
  .then(json => {
// Asignamos el JSON a la constante 'datos' 
    datos = json;  
    console.log(datos);  // Puedes imprimirlo para verificar
    //genramos un numero aleatorio
    var numeroAleatorio = Math.floor(Math.random() * 20);
    //asignamos el nombrePelicula y modificamos el contenido HTML
    let nombrePelicula = datos.results[numeroAleatorio].title
    h2.innerText = nombrePelicula;
    //asignamos una imagen para modificar el contenido img en HTML
    const imagenHero = `https://image.tmdb.org/t/p/w500/${datos.results[numeroAleatorio].backdrop_path}`;
    imgHero.src = imagenHero;
    let descripcion = datos.results[numeroAleatorio].overview
    descripcionHero.innerText = descripcion;
     //recorremos la array
    datos.results.forEach(pelicula => {
      //creo elemntos HTML desde jS
    const imgPoster = document.createElement("img");
    const linkInfo = document.createElement("a")
    //guardo un link en una variable
    linkInfo.href = `./infoUno.html?pelicula=${pelicula.id}`;
    //guardo la iumagen en una variable
    imgPoster.src = `https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`;
    //creo un contenedor y le envio la imagen con el link
    linkInfo.appendChild(imgPoster);
    contenedor.appendChild(linkInfo);
    });
    


  })
  .catch(err => console.error(err));





  