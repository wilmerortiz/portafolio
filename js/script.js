const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    if (event.target.value) {
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
    }
  });
});

function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
}

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validateForm = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const emailAddress = document.getElementById('email');
  const asunto = document.getElementById('asunto');
  const mensaje = document.getElementById('mensaje');

  if (nombre.value === "") {
    //alert("Por favor, escribe tu nombre y apellidos.");
    document.getElementById('error-nombre').innerHTML = "Por favor, escribe tu nombre y apellidos.";
    nombre.focus();
    return false;
  }else{
    document.getElementById('error-nombre').innerHTML = "";
  }
    
  if (email.value === "") {
    //alert("Por favor, escribe tu correo electrónico");
    document.getElementById('error-email').innerHTML = "Por favor, escribe tu correo electrónico";
    email.focus();
    return false;
  }else{
    document.getElementById('error-email').innerHTML = "";
  }

  if (!emailValido(email.value)) {
    //alert("Por favor, escribe un correo electrónico válido");
    document.getElementById('error-email').innerHTML = "Por favor, escribe un correo electrónico válido";
    emailAddress.focus();
    return false;
  }else{
    document.getElementById('error-email').innerHTML = "";
  }

  if (asunto.value === "") {
    //alert("Por favor, escribe un asunto.");
    document.getElementById('error-asunto').innerHTML = "Por favor, escribe un asunto.";
    asunto.focus();
    return false;
  }else{
    document.getElementById('error-asunto').innerHTML = "";
  }

  if (mensaje.value === "") {
    //alert("Por favor, escribe un mensaje.");
    document.getElementById('error-mensaje').innerHTML = "Por favor, escribe un mensaje.";
    mensaje.focus();
    return false;
  }else{
    document.getElementById('error-mensaje').innerHTML = "";
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

function showHideMenuMobile(){
  const menuMobile = document.getElementById('nav-mobile');
  const iconMenuMobile = document.getElementById('icon-menu-mobile');
  if(menuMobile.classList.contains('show')){
    menuMobile.classList.remove('show');
    iconMenuMobile.classList.remove('fa-x');
    iconMenuMobile.classList.add('fa-bars');
  }else{
    menuMobile.classList.add('show');
    iconMenuMobile.classList.remove('fa-bars');
    iconMenuMobile.classList.add('fa-x');
  }
}

let edad = calcularEdad("1988-11-02");
document.getElementById("edad").innerHTML = edad;

const submitBtn = document.getElementById('btnDone');
submitBtn.addEventListener('click', validateForm);

/**
 * Botones de control de menu de navegación
 */
var btnShow = document.getElementById('btn-show');

btnShow.addEventListener('click', showHideMenuMobile);

/*
document.getElementsByTagName('a').forEach(function(element) {
  element.addEventListener('click', showHideMenuMobile);
})
*/

let elements = document.getElementsByClassName('text-nav-mobile')
let spreadArray = [...elements];

//console.log(spreadArray);
spreadArray.forEach( element =>{
  element.addEventListener('click', showHideMenuMobile);
})