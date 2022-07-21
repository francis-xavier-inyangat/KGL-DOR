const firstFocus = ()=>{
    let pro = document.sellsform.nameofProduce.focus()
};

const valnameofProduce = (inputField, info1) => {
    let Produce = document.sellsform.nameofProduce;
    //const info1 = document.getElementById("info1").value;
    let pro = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(pro)){
        //info1.style.border = "2px solid red";
        info1.innerHTML = "not less than 2 characters";
        info1.style.color = "red";
        info1.style.fontSize = "12px";

        return false;  
    }
    else {
        Produce.style.border = "2px solid green";
        return true;
    }
   
    

};

//validating for tonnage in kgs
const valWeight = (inputField, info2) => {
    let Kg = document.sellsform.weight;
    if (inputField.value.length < 3){
        info2.innerHTML = "not less than 3 characters";
        info2.style.color = "red";
        info2.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    }
   

};

//amount paid validation
const valAmount = (inputField, info3)=>{
    let tel = document.sellsform.amount;
    if (inputField.value.length < 5){
        info3.innerHTML = "not less than 5 characters";
        info3.style.color = "red";
        info3.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    }
     
};

//name of buyer validation
const valnameofBuyer = (inputField, info4)=>{
    let Buyer = document.sellsform.nameofBuyer;
        let buyer = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(buyer)){
        info4.innerHTML = "not less than 2 characters";
        info4.style.color = "red";
        info4.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    } 
};

//sales agent name validation
const valAgent = (inputField, info5)=>{
    let Agent = document.sellsform.agent;
        let salesA = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(salesA)){
        info5.innerHTML = "not less than 2 characters";
        info5.style.color = "red";
        info5.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    } 
};
    