const firstFocus = ()=>{
    let pro = document.creditform.nameofProduce.focus()
};

const valnameofProduce = (inputField, info1) => {
    let Produce = document.creditform.nameofProduce;
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

//type of produce validation
//validation for type of produce
const valtypeofProduce = (inputField, info2) => {
    let typeP = document.creditform.typeofproduce;
    //const info2 = document.getElementById("info2").value;
    if (inputField.value == "Select"){
        //typeP.focus()
        //info2.style.border = "2px solid red";
        info2.innerHTML = "select the type of produce";
        info2.style.color = "red";
        info2.style.fontSize = "12px"; 
        return false;
        
    }
    else{
        inputField.style.border = "2px solid green";
        return true;  
    }
};

//validating for tonnage in kgs
const valWeight = (inputField, info3) => {
    let Kg = document.creditform.weight;
    if (inputField.value.length < 3){
        info3.innerHTML = "not less than 3 characters";
        info3.style.color = "red";
        info3.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    }
   

};


//validating for amount due
const valAmount = (inputField, info4)=>{
    let tel = document.creditform.amount;
    if (inputField.value.length < 5){
        info4.innerHTML = "not less than 5 characters";
        info4.style.color = "red";
        info4.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    }
     
};

//validating for name of buyer
const valnameofBuyer = (inputField, info5)=>{
    let Buyer = document.creditform.nameofBuyer;
        let buyer = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(buyer)){
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

//validation for NIN
const valNIN = (inputField, info6)=>{
    let nin = document.creditform.NIN;
        let Id = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 14 || !inputField.value.match(Id)){
        info6.innerHTML = "not less than 14 characters";
        info6.style.color = "red";
        info6.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    } 
};

//validate for Location
const valLocation = (inputField, info7)=>{
    let Location = document.creditform.location;
        let loc = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2|| !inputField.value.match(loc)){
        info7.innerHTML = "not less than 2 characters";
        info7.style.color = "red";
        info7.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    } 
};//validate buyers contact
const valContact = (inputField, info8)=>{
    let tel = document.creditform.contact;
    if (inputField.value.length < 10){
        info8.innerHTML = "not less than 10 characters";
        info8.style.color = "red";
        info8.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    }
   

    
};
//validate for sales agent name
const valAgent = (inputField, info9)=>{
    let Agent = document.creditform.agent;
        let salesA = /^[a-zA-Z0-9]+$/
    if (inputField.value.length < 2 || !inputField.value.match(salesA)){
        info9.innerHTML = "not less than 2 characters";
        info9.style.color = "red";
        info9.style.fontSize = "12px";

        return false;  
    }
    else {
        inputField.style.border = "2px solid green";
        return true;
    } 
};
    