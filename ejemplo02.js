var cont = 0;
var pantalla = document.querySelector('#contador')


function cambiar(i){
    if(cont+i >= 0 && cont+i <= 10){
        cont = i == undefined ? 0 : cont + i
        pantalla.innerHTML = cont
    }
    
}


function incrementar(){
    cont++
    pantalla.innerHTML = cont
}

function decrease(){
    cont--
    pantalla.innerHTML = cont
}


function reset(){
    cont = 0
    document.getElementById("contador").innerHTML = cont
}