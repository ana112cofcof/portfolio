function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 300 * i)

  });
}
const titulo = document.querySelector('.port');
typeWrite(titulo);

let colorStatus = 1;

function mudacor(){
  let elemento = document.body
  
   if (colorStatus % 2 != 0){
    elemento.style.background = "linear-gradient(223deg, #3E287E 16.14%, #430E78 39.9%, #E3E3E3 81.53%)";
    console.log('claro');
   }
   else{
    elemento.style.background ="linear-gradient(223deg, #47347C 16.14%, #250941 39.9%, #000 81.53%)";
    console.log('escuro');
   }
  colorStatus++;
}

