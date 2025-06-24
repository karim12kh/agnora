
var accounts = JSON.parse(localStorage.getItem("allAccounts")) || [];

var signUp = document.querySelector(".uSignup");
var signIn = document.querySelector(".uSignin");
var userName = document.querySelector(".username");
var userEmail = document.querySelector(".useremail");
var userPassword = document.querySelector(".userpassword");
var btnLogIn = document.querySelector(".log-btn");
var btnSignUp = document.querySelector(".signup-btn");
var uGuideSignUP = document.querySelector(".uguide-Sign-Up");
var uGuideSignIn = document.querySelector(".uguide-Signin");

// Show sign-up form
signUp.addEventListener("click", function () {
    userName.classList.remove("d-none");
    btnSignUp.classList.remove("d-none");
    btnLogIn.classList.add("d-none");
    uGuideSignUP.classList.add("d-none");
    uGuideSignIn.classList.remove("d-none");
});

// Show sign-in form
signIn.addEventListener("click", function () {
    userName.classList.add("d-none");
    btnSignUp.classList.add("d-none");
    btnLogIn.classList.remove("d-none");
    uGuideSignUP.classList.remove("d-none");
    uGuideSignIn.classList.add("d-none");
});

// Sign up
btnSignUp.addEventListener("click", addAccount);

function addAccount() {
    for (let acc of accounts) {
        if (acc.uEmail === userEmail.value) {
            alert("Email already exists!");
            return;
        }
    }

    var userAccount = {
        uName: userName.value,
        uEmail: userEmail.value,
        uPassword: userPassword.value
    };

    accounts.push(userAccount);
    localStorage.setItem("allAccounts", JSON.stringify(accounts));
    clear();
    alert("Account created successfully!");
}

// Sign in
btnLogIn.addEventListener("click", display);

function display() {
    let email = userEmail.value;
    let password = userPassword.value;
    let found = false;

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].uEmail === email && accounts[i].uPassword === password) {
            localStorage.setItem("loggedUser", accounts[i].uName);
            found = true;
            break;
        }
    }

    if (found) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid email or password.");
    }

    clear();
}

function clear() {
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
}
