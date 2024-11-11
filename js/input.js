


document.getElementById('add-mony-button').addEventListener('click' , function(event){
 event.preventDefault();

 const userMonyCome=tanvir('usermony');
 if(userMonyCome<0){
    alert("You have sum Misstack");
    return;
 }
 if(isNaN(userMonyCome)){
    alert("You have sum Misstack");
    return; 
 }

//  history add
// const div=document.createElement('div');
// div.innerHTML=`
//   <div class='bg-black ' >
//   <h4 class="text-white text-2xl "> Cash Out</h4>
//   <p class="text-white text-xl">${userMonyCome} Donate for Flood at Noakhali, Bangladesh </P>
//   </div>
// `
//  document.getElementById('history').appendChild(div);


 const donatemony=tanvir1("havemony");
 const accountBalance=tanvir1('account');

 if( accountBalance<userMonyCome  ){
    alert("You have sum Misstack");
    return;
 }

  
 const addDonatemon=tanviradd(userMonyCome, donatemony);
 const subtractbalance=subtractMony(accountBalance, userMonyCome);
 
    // const addDonatemony=userMonyCome+donatemony;
    document.getElementById('havemony').innerText=addDonatemon;

   // const subtractMony=accountBalance-userMonyCome;
    document.getElementById('account').innerText=subtractbalance;

    // 2nd number


});

document.getElementById('add-mony-button2').addEventListener ('click', function(event){
       event.preventDefault();

       const userM2=tanvir("usermony2");

       if(userM2<0){
        alert("You have sum Misstack");
        return;
     }
     if(isNaN(userM2)){
        alert("You have sum Misstack");
        return; 
     }

       const  donatemony2=tanvir1("havemony2");
       const accountBalance=tanvir1('account');
   
       const addDonatemon2=tanviradd(userM2, donatemony2);
       const subtractbalance2=subtractMony(accountBalance, userM2);
       document.getElementById('havemony2').innerText=addDonatemon2;
       document.getElementById('account').innerText=subtractbalance2;
});

document.getElementById('add-mony-button3').addEventListener ('click', function(event){
    event.preventDefault();

    const userM2=tanvir("usermony3");

    if(userM2<0){
        alert("You have sum Misstack");
        return;
     }
     if(isNaN(userM2)){
        alert("You have sum Misstack");
        return; 
     }
    const  donatemony2=tanvir1("havemony3");
    const accountBalance=tanvir1('account');

    const addDonatemon2=tanviradd(userM2, donatemony2);
    const subtractbalance2=subtractMony(accountBalance, userM2);
    document.getElementById('havemony3').innerText=addDonatemon2;
    document.getElementById('account').innerText=subtractbalance2;
});