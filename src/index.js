 

let encode = ()=> {
    let offset;  // variable que guarda el valor contenido en la caja de texto desplazamientos
    offset=document.getElementById("boxOffset").value;  // Asigna el valor de la caja (crea la interfaz) a la variable
    console.log(offset); //muestra en la consola el valor asignado
    let message; // variable que guarda el valor contenido en la caja de texto Mensaje a Codificar
    message=document.getElementById("boxString").value.toUpperCase(); // // Asigna el valor de la caja (crea la interfaz) a la variable
    console.log(message); ////muestra en la consola el valor asignado
    

    let messageCode;
    messageCode=cipher.encode(Number(offset),message);
    console.log(messageCode);
    let boxMessageCoded=document.getElementById("boxCoded"); // Crea la variable para enviar el valor a la caja de texto en html
    boxMessageCoded.value=messageCode; //Asigna el valor a la caja de texto
    
};