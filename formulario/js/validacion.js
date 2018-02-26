
	var email= document.forms["form"]["email"];
	var contra=document.forms["form"]["contra"];
	var confirmacion=document.forms["form"]["confirmacion"];
	var email2=document.forms["form2"]["email2"];
	var contra2=document.forms["form2"]["contra2"];

email.addEventListener("keyup", function(event){		
		var exprEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!exprEmail.test(email.value)){	

			email.setCustomValidity("Formato invalido de correo");
		}
		else{
			email.setCustomValidity("");
			
		}

	});

contra.addEventListener("keyup", function(event){	
		var exprContra=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;	
		if(!exprContra.test(contra.value)){	

			contra.setCustomValidity("La contraseña debe contener al menos una minuscula, una mayuscula, un numero y un caracter especial");
		}
		else{
			contra.setCustomValidity("");
			
		}

	});


confirmacion.addEventListener("keyup", function(event){		
		if(contra.value!=confirmacion.value){	

			confirmacion.setCustomValidity("Contraseña distina");
		}
		else{
			confirmacion.setCustomValidity("");

		}

	});

$('.formReg').on('submit', function(event){
	//preventDefault hace que submit no me recargue la pagina
	event.preventDefault();
	email = email.value;
	contra = sha256(contra.value); 
	crearCookie(email,contra);
	$(this).unbind('submit').submit();
	alert("Te has registrado correctamente");

})

$('.form2').on('submit', function(event){
	//preventDefault hace que submit no me recargue la pagina
	event.preventDefault();
	email2 = email2.value;
	contra2 = sha256(contra2.value); 
	
	if(comprobarCookie(email2,contra2)){
		alert("Sesion iniciada, bienvenido "+email2);
		crearCookie('sesion',email2);
		$(this).unbind('submit').submit();
	}
	else{
		alert("Correo no registrado, pruebe de nuevo");
		$(this).unbind('submit').submit();
	}


})
/*
Intento de eliminar la cookie:
if()

$(".logout").html("logout");
*/



function crearCookie(cname, cvalue, exdays) {
	if(exdays){
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
	}else{
		var expires ='';
	}
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function obtenerCookie(email) {
    var name = email + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function comprobarCookie(email2,contra2) {
    var contra = obtenerCookie(email2);
   
    if (contra!="" && contra2==contra) {
        
        return true;
        
    }else{
        
        return false;
    }
}
/*
function comprobarCookie(email2,contra2) {
    var contra = obtenerCookie(email2);
   
    if (contra!="" && contra2==contra) {
        alert("Sesion iniciada, bienvenido "+email2);
        
    }else{
        alert("Correo no registrado");
    }
}

*/




