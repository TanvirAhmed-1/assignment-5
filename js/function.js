function tanvir (id){
    const inputValue = document.getElementById(id).value;
    const inputInt=parseInt(inputValue);
    return inputInt;
}

// add function
function tanviradd(num1, num2){
    const addingNumber=num1+num2;
    return addingNumber;
}


// subtract function
function subtractMony(num1, num2){
    const subM =num1-num2;
    return subM;
};

function blogmony(){
    const blog=document.getElementById('account').innerText;
    document.getElementById('blogaccount').innerText=blog;
};
