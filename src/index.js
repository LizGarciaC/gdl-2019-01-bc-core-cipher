 

let valida = () => {
  let offset;  // variable que guarda el valor contenido en la caja de texto desplazamientos
  offset=document.getElementById("boxOffset").value;  // Asigna el valor de la caja (crea la interfaz) a la variable
  
  let string; // variable que guarda el valor contenido en la caja de texto Mensaje a Codificar
  string=document.getElementById("boxString").value.toUpperCase(); // // Asigna el valor de la caja (crea la interfaz) a la variable
  
  if (offset.length == 0) { // si la variable offset esta vacia muestra el mensaje y regresa false
    alert ('Por favor ingresa el código para tu contraseña.');
    return false;
  } 
  if (string.length == 0) { // si la variable string esta vacia muestra el mensaje y regresa false
    alert ('Por favor ingresa el texto a codificar.');
    return false;
  } 
  return true; // todo fue correcto y regresa true
};

let txt1 = document.getElementById("boxString");
txt1.addEventListener('keyup', () => {
  
  let string; // variable que guarda el valor contenido en la caja de texto Mensaje a Codificar
  string=document.getElementById("boxString").value.toUpperCase(); // // Asigna el valor de la caja (crea la interfaz) a la variable
  document.getElementById("boxString").value = string; // asigna el valor de la caja en mayusculas 
  if (string.charCodeAt(string.length - 1) != 32){ // revisa que la ultima letra escrita no sea espacio
    if (string.charCodeAt(string.length - 1) < 65 || string.charCodeAt(string.length - 1)>91){ // revisa que la ultima letra escrita no sea una mayuscula
      document.getElementById("boxString").value = string.substring(0,string.length-1); // borra ultimo caracter que es invalido y guarda la cadena en la caja
    }
  }
});

let btn1 = document.getElementById("btn1");
btn1.addEventListener ('click', ()=>{
  if (valida()){ // usamos la funcion valida para revisar los datos de las cajas, si todo esta bien continua
    let offset;  // variable que guarda el valor contenido en la caja de texto desplazamientos
    offset=document.getElementById("boxOffset").value;  // Asigna el valor de la caja (crea la interfaz) a la variable
    let string; // variable que guarda el valor contenido en la caja de texto Mensaje a Codificar
    string=document.getElementById("boxString").value.toUpperCase(); // // Asigna el valor de la caja (crea la interfaz) a la variable
    
    let stringCode;  // Variable donde se guardaran los resultados del cifrado
    stringCode=cipher.encode(Number(offset),string);
    let boxstringCoded=document.getElementById("boxCoded"); // Crea la variable para enviar el valor a la caja de texto en html
    boxstringCoded.value=stringCode; //Asigna el valor a la caja de texto
  }
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener ('click', ()=>{ //función para evento click sobre el boton
  if (valida()){ // usamos la funcion valida para revisar los datos de las cajas, si todo esta bien continua
    let offset;  // variable que guarda el valor contenido en la caja de texto desplazamientos
    offset=document.getElementById("boxOffset").value;  // Asigna el valor de la caja (crea la interfaz) a la variable
    let string; // variable que guarda el valor contenido en la caja de texto Mensaje a decodificar
    string=document.getElementById("boxString").value.toUpperCase(); // // Asigna el valor de la caja (crea la interfaz) a la variable

    let stringCode; //Variable donde se guardadn los resultados del descifrado
    stringCode=cipher.decode(Number(offset),string);
    let boxstringCoded=document.getElementById("boxCoded"); // Crea la variable para enviar el valor a la caja de texto en html
    boxstringCoded.value=stringCode; //Asigna el valor a la caja de texto
  }
});

let btn3=document.getElementById('btn3'); //Crea la variable y asigna el elemento btn3
btn3.addEventListener("click", ()=>{ // //función para evento click sobre el boton

  let offset=document.getElementById("boxOffset"); //Crea la variable y asigna el elemento boxOffset
  offset.value=""; // Le asigna un valor "vacio"
  let string=document.getElementById("boxString"); //Crea la variable y asigna el elemento boxString
  string.value=""; // Le asigna un valor "vacio"
  let boxstringCoded=document.getElementById("boxCoded"); //Crea la variable y asigna el elemento boxCoded
  boxstringCoded.value=""; // Le asigna un valor "vacio"
});

