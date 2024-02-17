/*form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (Cuenta()) {
        form.submit();
    }
});


function Cuenta() {
    let name = document.querySelector(".name").value;
    let last = document.querySelector(".last").value;
    let gmail = document.querySelector(".email").value;
    let pass = document.querySelector(".pass").value;

    if (name === "" && last === "" && gmail === "" && pass === "") {
        //let error = document.querySelector(".error").classList.toggle("error")
        alert("completa los campos")
        return false;
    } else if (name === "") {
        let error = document.querySelector(".error");
        error.innerHTML = "<p>completar el nombre</p>";
        error.style.borderColor = "red";
        return false;
    } else if (last === "") {
        let error = document.querySelector(".error");
        error.innerHTML = "<p>completar el segundo nombre</p>";
        error.style.borderColor = "red";
        return false;
    } else if (gmail === "") {
        let error = document.querySelector(".error");
        error.innerHTML = "<p>completar el Gmail</p>";
        error.style.borderColor = "red";
        return false;
    } else if (pass === "") {
        let error = document.querySelector(".error");
        if (pass.length >= 8 && pass.length <= 16) {
        error.innerHTML = "<p>ingrese contraseña de 8 a 16 letras</p>";
    } 
}
}*/

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (Cuenta()) {
    form.submit();
  }
});

function Cuenta() {
  let name = document.querySelector(".name").value;
  let last = document.querySelector(".last").value;
  let gmail = document.querySelector(".email").value;
  let pass = document.querySelector(".pass").value;

  if (name === "" && last === "" && gmail === "" && pass === "") {
    alert("completar los campos");
    return false;
  } else if (name === "") {
    let error = document.querySelector(".error");
    error.innerHTML = "<p>completar el nombre</p>";
    error.style.borderColor = "red";
    return false;
  } else if (last === "") {
    let error = document.querySelector(".error");
    error.innerHTML = "<p>completar el segundo nombre</p>";
    error.style.borderColor = "red";
    return false;
  } else if (gmail === "") {
    let error = document.querySelector(".error");
    error.innerHTML = "<p>completar el Gmail</p>";
    error.style.borderColor = "red";
    return false;
  } else if (pass === "") {
    let error = document.querySelector(".error");
    if (pass.length >= 8 && pass.length <= 16) {
      error.innerHTML = "<p>ingrese contraseña de 8 a 16 letras</p>";
    } else {
      alert("Ingrese contraseña");
    }
    return false;
  } else {
    return true;
  }
}