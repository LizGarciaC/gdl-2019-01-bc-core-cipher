window.cipher = {
  //cipher.encode(offset,string);
  encode:(offset, string)=> {
    let cstring=[];

    for (let count=0; count<string.length; count++){ //Ciclo para acceder a cada letra individual del mensaje
  
      let charAscii=string.charCodeAt(count)

      if (charAscii==32){
        cstring.push(String.fromCharCode(charAscii));
      }
        else {

        charAscii=(charAscii-65+offset)%26+65;

          if (charAscii<65){
          charAscii=charAscii+26;
        }
        cstring.push(String.fromCharCode(charAscii)); 

        }


      }
       
      

    return cstring.join("");
  },


  decode:(offset, string)=>{
    offset=offset*(-1);
    let dstring=[];

    for (let count=0; count<string.length; count++){ //Ciclo para acceder a cada letra individual del mensaje
  
      let charAscii=string.charCodeAt(count)

      if (charAscii==32){
       
        dstring.push(String.fromCharCode(charAscii));
      }
        else {

        charAscii=(charAscii-65+offset)%26+65;

          if (charAscii<65){
          charAscii=charAscii+26;
        }
        dstring.push(String.fromCharCode(charAscii)); 

        }


      }

      return dstring.join("");


},
}