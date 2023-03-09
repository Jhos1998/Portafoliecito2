document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener("submit",validarFormulario);
});

function validarFormulario(evento){
    evento.preventDefault();
//nombre
    var nombre = document.getElementById("name").value;
    if(nombre.length == "" || nombre.length <=2){
        swal("Opps!", 'Nombre Obligatorio!! Debe contener mínimo 3 caracteres y máximo 20 pe chamo.', "warning");
        return;
    }
    if(nombre.length>="20"){
        swal("Opps!", 'Maximo 20 caracteres', "warning");
        return;
    }
//numero
    var numero = document.getElementById("number").value;
    if(numero.length != 9){   
        swal("Opps!", 'Ingrese un numero valido', "warning");
        return;
    }
//correo
    var email = document.getElementById("email").value;
    if(email.length==""){
        swal("Opps!", 'Email obligatorio', "warning");
        return;
    }
    if( !(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/).test(email) ){
        swal("Opps!", 'Email invalido', "warning");
        return false;
    }
     
//tema
    var tema = document.getElementById("tema").value;
    if(tema.length > 15){   
        swal("Opps!", 'Maximo 15 caracteres', "warning");
        return;
    }
//mensaje
   var mensaje = document.getElementById("mensaj").value;
    if(mensaje.length > 30){   
        swal("Opps!", 'Maximo 30 caracteres', "warning");
        return;
    }
    this.submit();
}
