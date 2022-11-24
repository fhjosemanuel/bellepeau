function buscar(){
    var buscar = document.querySelector("#buscar").value;
    var panel = document.querySelector("#imprimir");
    console.log(buscar);

    if(buscar == 'BellePeau'){
         panel.innerHTML = "Es una empresa que  tiene como prioridad el cuidado de la piel";


    }else if(buscar == 'Recomendaciones'){
        panel.innerHTML = "Tenemos las mejores recomendaciones del cuidado de tu piel diagnósticadas por Dermatólogos reconocidos en el área.";

    }else if(buscar == 'protector'){
        panel.innerHTML = "Utiliza un protector solar de amplio espectro que tenga un factor de protección solar ayuda bastante ala piel";

    }else if(buscar == 'mision'){
         panel.innerHTML = "equipo de trabajo que tiene la misión de Aportar soluciones, para mas informacion por favor  acceder al apartado de quienessomos";

    }else if(buscar == 'productos'){
        panel.innerHTML = "Por favor ingresa al apartado de productos para mas información";
    
    }else if(buscar == 'vision'){
        panel.innerHTML = "Ser el sitio web más reconocido ,Por favor ingresa al apartado de quienessomos para mas información";

    }else if(buscar == 'piel'){
        panel.innerHTML = "PLa piel es el órgano más extenso del cuerpo. Está compuesta por tres capas diferentes, Epidermis, Dermis, Hipodermis";
    
    }else if(buscar == 'Epidermis'){
        panel.innerHTML = " es la capa externa, que constituye la verdadera cubierta de protección contra influencias ambientales como las toxinas";
    
    }else if(buscar == 'Dermis'){
        panel.innerHTML = " es la capa diez veces más gruesa que la epidermis, es el tejido de sostén de la piel y responsable de su elasticidad y fortaleza.";
    
    }else if(buscar == 'Hipodermis'){
        panel.innerHTML = "es la capa más interna, y protege el tejido muscular absorbiendo los impactos gracias a las aglomeraciones en forma de ‘almohadilla’ de unas células de grasa llamadas adipocitos";
    
     }else{
        panel.innerHTML = "Lo siento, no hay resultados que coincidan con tu busqueda ";
    }
     
}
