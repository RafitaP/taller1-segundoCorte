function crearNodo(nodo) {

  var nodo = document.createElement(nodo);
  nodo.style.color = "black";
  return nodo;

}

function crearNodoConTexto(nodo, texto) {

  var nodo = crearNodo(nodo);
  var nodoTexto = document.createTextNode(texto);
  nodo.appendChild(nodoTexto);
  return nodo;

}

function crearImagen(ruta, textoAlt) {

  var nodoImagen = crearNodo("img");
  nodoImagen.src = ruta;
  nodoImagen.alt = textoAlt;
  return nodoImagen;

}

function adicionarNodoABody(nodo) {

  document.body.appendChild(nodo);

}

function adicionarNodoAContenedor(nodo, contenedor) {

  contenedor.appendChild(nodo);

}

function crearVideo(ruta, textoAlt) {

  var nodoVideo = crearNodo("video");
  nodoVideo.src = ruta;
  nodoVideo.alt = textoAlt;
  nodoVideo.controls = true;
  return nodoVideo;

}