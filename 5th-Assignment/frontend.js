function selectTab(currentTab){
    $(".main-body").css("display", "none");
    
    if(currentTab.id === "exchange-tab"){
        $("#exchange").css("display", "inline-block");
    }
    else if(currentTab.id === "add-tab"){
        $("#add").css("display", "inline-block");
    }
    else if(currentTab.id === "update-tab"){
        $("#update").css("display", "inline-block");
    }
}

function verifyExchangeForm(){
    var validInput = /^[0-9.]+$/;
    var input = document.getElementById("exchange-form-amount").value;

    if(validInput.test(input)){
        return true;
    }
    else{
        alert("Input Invalid");
        return false;
    }
}

function verifyAddCountryForm(){
    /*NEED TO DO:
    check here if the country is already in the db, if it is we ask the user if
    they want to update instead*/
    
    var testIfString = /^[a-zA-Z]+$/;
    var testIfStringOrSpace = /^[a-zA-Z ]+$/;
    var testIfNumber = /^[0-9]+$/;
    var testIfNumberOrDecimal = /^[0-9.]+$/;

    var countryName = document.getElementById("add-country-form-country-name").value;
    
    if(!testIfStringOrSpace.test(countryName)){
        alert("Country Input Invalid");
        return false;
    }

    var currency = document.getElementById("add-country-form-currency").value;

    if(!testIfString.test(currency)){
        alert("Currency Input Invalid");
        return false;
    }

    var notation = document.getElementById("add-country-form-notation").value;

    if(testIfNumber.test(notation)){
        /*potentially temporary, i guess we could make a list of
        valid notations and check if the input is in that collection
        rather than just making sure its anything but a number*/
        alert("Notation Input Invalid");
        return false;
    }
    
    var rate = document.getElementById("add-country-form-rate").value;

    if(!testIfNumberOrDecimal.test(rate)){
        alert("Rate Input Invalid");
        return false;
    }

    var commission = document.getElementById("add-country-form-commission").value;

    if(!testIfNumberOrDecimal.test(commission)){
        alert("Commission Input Invalid");
        return false;
    }

    return true;
}

function verifyUpdateCountryForm(){
    /* NEED TO DO:
    make sure that the country being updated is actually in the db*/

    var testIfString = /^[a-zA-Z]+$/;
    var testIfStringOrSpace = /^[a-zA-Z ]+$/;
    var testIfNumber = /^[0-9]+$/;
    var testIfNumberOrDecimal = /^[0-9.]+$/;

    var currency = document.getElementById("update-form-currency").value;

    if(!testIfString.test(currency)){
        alert("Currency Input Invalid");
        return false;
    }

    var notation = document.getElementById("update-form-notation").value;

    if(testIfNumber.test(notation)){
        /*potentially temporary, i guess we could make a list of
        valid notations and check if the input is in that collection
        rather than just making sure its anything but a number*/
        alert("Notation Input Invalid");
        return false;
    }
    
    var rate = document.getElementById("update-form-rate").value;

    if(!testIfNumberOrDecimal.test(rate)){
        alert("Rate Input Invalid");
        return false;
    }

    var commission = document.getElementById("update-form-commission").value;

    if(!testIfNumberOrDecimal.test(commission)){
        alert("Commission Input Invalid");
        return false;
    }

    return true;
}
