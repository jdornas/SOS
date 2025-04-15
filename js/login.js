function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "Flavia" && pass === "12345") {
    return true;
  } else {
    alert("Usuário ou senha incorretos!");
    return false;
  }
}
