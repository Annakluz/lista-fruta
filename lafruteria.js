function agregarItem(){
  var fruta = document.getElementById("frutaNueva").value;
  if(fruta.length>0){
    var li = document.createElement("li");
    li.id = fruta;
    li.innerHTML = fruta;
    document.getElementById('listaVacia').appendChild(li);
    document.getElementById('frutaNueva').value = ""
  }
return false;
}
function eliminar(){
      var quitar=document.getElementById('listaVacia');
      quitar.removeChild(quitar.lastElementChild);
     }
