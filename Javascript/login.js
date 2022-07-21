const firstFocus = ()=> {
    let email = document.loginform.email.focus()
};

const valEmail = (inputField, info1) => {
    let Email = document.loginform.email;
    //const info1 = document.getElementById("info1").value;
    let Em = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(Em)){
        //info1.style.border = "2px solid red";
        info1.innerHTML = "not less than 2 characters";
        info1.style.color = "red";
        info1.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    }
   
    

};

const valPassword = (inputField, info2) => {
    let Password = document.loginform.password;
    //const info1 = document.getElementById("info1").value;
    let password = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(password)){
        //info1.style.border = "2px solid red";
        info2.innerHTML = "not less than 2 characters";
        info2.style.color = "red";
        info2.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    }
   
    

};