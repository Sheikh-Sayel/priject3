let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let Form = document.querySelector("#form");

function ShowError(input,massage){
    const FormControl = input.parentElement
    FormControl.className = "form-control.error";
    const small = FormControl.querySelector("small");
    small.innerText = massage;

}
function ShowSuccess(input){
    const FormControl = input.parentElement
    FormControl.className = "form-control success";
    
    

}

function checkMail(input){
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s @"]+)*)|(".+"))@ ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{ 1.3}\.[0-9]{1.3}\])|(([a-zA-Z\-0-9]+\.) +[a-zA-Z]{2,} ))$/;
    if(RegEx.test(input.var)){
        ShowSuccess(input)
    }else{
        ShowError(input,"Email Is Not Valied");
    }

}
function CheckInputLength(input,min,max){
    if(input.value.lenght < min) {
        ShowError(input, `${GetFieldName(input)} You Much Be At Least ${min}
        Characters`);
    }else if(input.value.lenght < max) {
        ShowError(input, `${GetFieldName(input)} You Much Be less then ${max}
        Characters`);
    }
    else{
        ShowSuccess(input) 
    }
    
}

function GetFieldName(input){
    return input.id.charat(0).toUppercase() + input.id.slice(1);
}


function CheckPasswordMatch(input1, input2){



    if(input1.value !== input2.value){
    
    
    
    ShowError(input2, "Password Is Not")
    
    }
    
    }
    
Form.addEventListener("submit",(e)=>{
    e.preventDefault();

    CheckInputLength(username, 3, 20)
    CheckInputLength(password, 6, 30)
    checkMail(email)
    checkPassWordMatch( PassWord , PassWord2 )

})


