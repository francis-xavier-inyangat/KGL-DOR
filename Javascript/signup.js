const firstFocus = ()=>{
    let Uname = document.signupform.Username.focus()
};

const valUsername = (inputField, info1) => {
    let User = document.signupform.Username;
    //const info1 = document.getElementById("info1").value;
    let Uname = /^[A-Za-z]+$/;
    if (inputField.value.length < 14 || !inputField.value.match(Uname)){
        //info1.style.border = "2px solid red";
        info1.innerHTML = "must be between 3-14 characters";
        info1.style.color = "red";
        info1.style.fontSize = "12px";
        inputField.focus();
        return false;  
    }
    else {
        inputField.innerHTML = 'valid Username';
        inputField.style.border = "2px solid green";
        info1.style.fontSize = "12px";
        return true;
    }
   
    

};

const valEmail = (inputField, info2) => {
    let User = document.signupform.Username;
    //const info1 = document.getElementById("info1").value;
    let email = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(Uname)){
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
