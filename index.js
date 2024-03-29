let numAttempts = 0;
document.addEventListener('DOMContentLoaded', init, false);
function init() {
    function matchPWD() {
        match();
    }
    var button = document.getElementById("submit");
    button.addEventListener("click", matchPWD);
};

const match = () => {
    let pwdText = document.getElementById("pwd");
    let confText = document.getElementById("c_pwd");
    const para = document.createElement("p");
    para.style.color = "red";
    para.style.width = "14rem";
    const text = document.createTextNode("*Passwords do not match.");
    const errorDiv = document.getElementById("error");
    const pwdCss = document.querySelector("input#pwd");
    const cpwdCss = document.querySelector("input#c_pwd");
    if ((pwdText != confText) && (numAttempts == 0)) {
        document.querySelector("form").setAttribute("onsubmit", "event.preventDefault();");
        para.appendChild(text);
        errorDiv.appendChild(para);
        numAttempts = 1;
        pwdText.value = "";
        confText.value = "";
        pwdCss.style.border = "1px solid red";
        cpwdCss.style.border = "1px solid red";
    } else if ((pwdText != confText)) {
        document.querySelector("form").setAttribute("onsubmit", "event.preventDefault();");
    }
    document.querySelector("form").removeAttribute("onsubmit", "event.preventDefault();");
};


