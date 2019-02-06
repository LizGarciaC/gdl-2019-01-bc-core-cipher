 
let btn1 = document.getElementById("btn1");
  btn1.addEventListener ('click', ()=>{

    let offset;  // variable que guarda el valor contenido en la caja de texto desplazamientos
    offset=document.getElementById("boxOffset").value;  // Asigna el valor de la caja (crea la interfaz) a la variable
    //console.log(offset); //muestra en la consola el valor asignado
    let string; // variable que guarda el valor contenido en la caja de texto Mensaje a Codificar
    string=document.getElementById("boxString").value.toUpperCase(); // // Asigna el valor de la caja (crea la interfaz) a la variable
    console.log(string); ////muestra en la consola el valor asignado
    

    let stringCode; 
    stringCode=cipher.encode(Number(offset),string);
    console.log(stringCode);
    let boxstringCoded=document.getElementById("boxCoded"); // Crea la variable para enviar el valor a la caja de texto en html
    boxstringCoded.value=stringCode; //Asigna el valor a la caja de texto
    
});

  let btn2 = document.getElementById("btn2");
  btn2.addEventListener ('click', ()=>{


    let offset;  // variable que guarda el valor contenido en la caja de texto desplazamientos
    offset=document.getElementById("boxOffset").value;  // Asigna el valor de la caja (crea la interfaz) a la variable
    console.log(offset); //muestra en la consola el valor asignado
    let string; // variable que guarda el valor contenido en la caja de texto Mensaje a decodificar
    string=document.getElementById("boxString").value.toUpperCase(); // // Asigna el valor de la caja (crea la interfaz) a la variable
    console.log(string); ////muestra en la consola el valor asignado


    let stringCode;
    stringCode=cipher.decode(Number(offset),string);
    console.log(stringCode);
    let boxstringCoded=document.getElementById("boxCoded"); // Crea la variable para enviar el valor a la caja de texto en html
    boxstringCoded.value=stringCode; //Asigna el valor a la caja de texto

});

//let clean = ()=>{
  let btn3=document.getElementById('btn3');
  btn3.addEventListener("click", ()=>{

  let offset=document.getElementById("boxOffset"); 
  offset.value="";
  let string=document.getElementById("boxString");
  string.value="";
  let boxstringCoded=document.getElementById("boxCoded");
  boxstringCoded.value="";




});

