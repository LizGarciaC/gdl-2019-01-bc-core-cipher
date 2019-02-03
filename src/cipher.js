window.cipher = {
  //cipher.encode(offset,message);
  encode:(offset, message)=> {
    let cMessage=[];

    for (let count=0; count<message.length; count++){ //Ciclo para acceder a cada letra individual del mensaje
      let charAscii=(message.charCodeAt(count)-65+offset)%26+65; // Toma el valor de cada letra, lo convierte a Ascii, y lo codifica segun la ctd de desplazamientos solicitados (offset)
      if (charAscii<65){ // Control de flujo que se ejecuta en caso de que el desplazamiento solicitado sea negativo
      charAscii=charAscii+26; // nos regresa el valor a la primer posición  de la tabla
      }
        
      cMessage.push(String.fromCharCode(charAscii));
    }

    return cMessage.join("");
  },

  decode:(offset, message)=>{
    return;
  }
  // ... 
};
