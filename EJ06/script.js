let menuVisible = false;
//funcion ocultar mostrar.
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="reponsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //oculto  menu al seleccionar una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion aplica animaciones de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills= window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacions");
        habilidades[9].classList.add("proyect");

    }
}