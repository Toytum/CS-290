function checkIfValid(){
    var phoneNumberFormat=/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var phoneNumber=document.getElementById("phoneNumber").value;

    if(phoneNumberFormat.test(phoneNumber)){ alert("Nice job!")
        return true;
        }
        else{ alert("Not so fast");
        document.getElementById("phoneNumber").setfocus();
        return false;
        }

}
var ele = document.getElementById("phoneNumber");
ele.addEventListener("blur",checkIfValid, false)