/*Validacion de la seccion About, Formulario de contacto*/
function  validar(){
    var nombre =document.getElementById("nombre").value
    var celular = document.getElementById("telefono").value
    var gmail = document.getElementById("correo").value
    var comenta = document.getElementById("comentario").value

    //validacion celular
    var expresionCelular = /^[6-7]{1}[0-9]{7}$/;
    //validacion Correo
    var expresionCorreo = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(nombre==""){
        alert("Ingrese su Nombre");
    }else{
        if(celular==""){
            alert("Ingrese su Numero Celular");
            }else{
                if(expresionCelular.test(celular)){
                }else{
                alert("Error, El Numero de telefono celular debe iniciar con un 6 o 7");
            }if(gmail==""){
                alert("Introduzca su Correo Electronico")
                }else{            
                if(expresionCorreo.test(gmail)){
                }else{
                    alert("Error, Introduzca un correo electronico valido");
                }if(comenta==""){
                    alert("Envianos tus comentarios!");
                }else{
                    alert("Su mensaje se ha enviado con exito Pronto nos comunicaremos contigo!")
            }
        }
    }
}
}
/*Validacion de la seccion Registrate, Formulario de Registrate*/
function valida_Regis(){
    var Nombre =document.getElementById("nombre").value
    var Apellido =document.getElementById("apellido").value
    var Gmail = document.getElementById("correo").value
    var Contra = document.getElementById("password").value
    var Depar = document.getElementById("depa").value
    var Muni =document.getElementById("muni").value
    var Celular = document.getElementById("telefono").value

    //validacion celular
    var expresionCelular = /^[6-7]{1}[0-9]{7}$/;
    //validacion Correo
    var expresionCorreo = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(Nombre==""){
        alert("Ingrese sus Nombre");
    }else{
        if(Apellido==""){
        alert("Ingrese sus Apellidos");
    }else{
        if(Gmail==""){
            alert("Introduzca su Correo Electronico")
            }else{            
            if(expresionCorreo.test(Gmail)){
            }else{
                alert("Error, Introduzca un correo electronico valido");
            }
            if(Contra==""){
                alert("Ingrese una Contraseña");
            }else{
                if(Depar==""){
                    alert("Ingrese su Departamento");
                }else{
                    if(Muni==""){
                        alert("Ingrese su Municipio.");
                    }else{
                        if(Celular==""){
                            alert("Ingrese su Numero Celular");
                            }else{
                                if(expresionCelular.test(Celular)){
                                }else{
                                alert("Error, El Numero de telefono celular debe iniciar con un 6 o 7");
                                }
                                alert("HOLA "+Nombre+" TE ACABAS DE SUSCRIBIR POR $99.99 DOLARES AL MES!!!")
                                
                            }
                        }
                    }
                }  
            }
        }
    }
    
}