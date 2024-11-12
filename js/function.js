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

function hiddenbutton(id){
   document.getElementById('donatebutton').classList.add('hidden');
   document.getElementById('history-div').classList.add('hidden');

//    show div
document.getElementById(id).classList.remove('hidden');
}

// button color change
const button=document.getElementById('donation-b').addEventListener('click',function(){
button.style.backgroundColor= 'red'
});

    function tanvi(){
        document.getElementById('donation-b').style.backgroundColor='#B4F461';
        document.getElementById('history').style.backgroundColor='#C8C8C8';

        
    }
    function tan(){
        document.getElementById('history').style.backgroundColor='#B4F461';
        document.getElementById('donation-b').style.backgroundColor='#C8C8C8';

        
    }
