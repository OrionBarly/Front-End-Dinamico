function login() {
  var user, password;

  user = document.getElementById("usuario").value;
  password = document.getElementById("contraseña").value;

  if (user == "prueba" && password == "1234") {
    window.location = "index.html";
  } else {
    alert("Datos Incorrectos");
  }
}
