let loggedUser = localStorage.getItem("loggedUser");
if (loggedUser) {
    document.getElementById("myh1").innerHTML = `Welcome ${loggedUser}`;
} else {
    window.location.href = "./index.html";
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "./index.html";
}