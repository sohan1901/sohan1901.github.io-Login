const loginForm = document.getElementById("myform");
const loginButton = document.getElementById("form_submit");
const loginErrorMsg = document.getElementById("error_message");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    //username = Dev_dribble and password = Dev_dribble
    if (username === "Dev_dribble" && password === "Dev_dribble")
    {
        loginErrorMsg.style.opacity = 0;
        alert("You have successfully logged in.");
        location.reload();
    }
    else
    {
        loginErrorMsg.style.opacity = 1;
    }
})