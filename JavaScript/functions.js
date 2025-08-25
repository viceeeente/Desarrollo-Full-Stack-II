const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const clave1 = document.getElementById("clave1");
const clave2 = document.getElementById("clave2");




nombre.addEventListener('blur', function(e){
    if(nombre.value.lenght == 0){
        nombre.classList.add("error");
    }else{
        nombre.classList.remove("error");
    }
});
email.addEventListener('blur', function(e){
    if(!email.value.includes("@")){
        email.classList.add("error");
    }else{
        email.classList.remove("error");
    }
});
clave2.addEventListener('blur', function(e){
    if(clave1.value != clave2.value){
        clave2.classList.add("error");
    }else{
        clave2.classList.remove("error");
    }
});