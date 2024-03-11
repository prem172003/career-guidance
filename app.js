const formopenbtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formcontainer = document.querySelector(".form_container"),
formclosebtn = document.querySelector(".form_close"),
SignupBtn = document.querySelector("#Signup"),
LoginBtn = document.querySelector("#Login"),
pwShowhide = document.querySelectorAll(".pw_hide"),
logbutton = document.querySelector('.log-button'),
chatbot = document.querySelector(".chatbot"),
card = document.getElementById("#card")

formopenbtn.addEventListener("click", () =>{
    home.classList.add("show");
    formopenbtn.style.display = 'none';
})
formclosebtn.addEventListener("click", () => home.classList.remove("show"))

// pwShowhide.forEach (icon => {
//     icon.addEventListener("click", () => {
//         let getpwinput = icon.parentElement.querySelector("input")
//         if (getpwinput.type === "password") {
//             getpwinput.type ="text";
//             icon.classList.replace("uil-eye-slash", "uil-eye")
//         }else {
//             getpwinput.type ="password";
//             icon.classList.replace("uil-eye", "uil-eye-slash");
//         }
//     })

// })

SignupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formcontainer.classList.add("active");

});

LoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formcontainer.classList.remove("active");
    chatbot.style.zIndex = 100;


});

logbutton.addEventListener('click',() =>{
    formcontainer.style.display ="none";
    chatbot.style.display = "block"
})


