


document.getElementById('add-mony-button').addEventListener('click' , function(event){
 event.preventDefault();

 const userMonyCome=tanvir('usermony');
 if(userMonyCome<0){
    alert("ohh! You have some mistake");
    return;
 }
 if(isNaN(userMonyCome)){
    alert("You have sum Mistake.inter Number");
    return; 
 }

//add time
 const mydate=new Date()
 console.log(mydate.toISOString())
 //history add

const div=document.createElement('div');
div.innerHTML=`
  <div class='bg-black border-2 rounded-xl my-4 px-5 mx-20 py-5' >
  <h4 class="text-white text-2xl pb-3"> Donation</h4>
  <p class="text-white text-xl my-3">${userMonyCome} Donate for Flood at Noakhali, Bangladesh </P>
   <p>${mydate}</P>
  </div>
`
// add history from div
 document.getElementById('donation-history').appendChild(div);


 const donatemony=tanvir1("havemony");
 const accountBalance=tanvir1('account');

 if( accountBalance<userMonyCome  ){
    alert(" Sorry! You have no Mony");
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
        alert("ohh! You have some mistake");
        return;
     }
     if(isNaN(userM2)){
        alert("You have sum Mistake.inter Number");
        return; 
     }

     //add time
 const mydate=new Date()
 console.log(mydate.toISOString())
 //history add

const div=document.createElement('div');
div.innerHTML=`
  <div class='bg-black border-2 rounded-xl my-4 px-5 mx-20 py-5' >
  <h4 class="text-white text-2xl pb-3"> Donation</h4>
  <p class="text-white text-xl my-3">${userM2} Donate for Flood Relief in Feni,Bangladesh </P>
   <p>${mydate}</P>
  </div>
`
// add history from div
 document.getElementById('donation-history').appendChild(div);

       const  donatemony2=tanvir1("havemony2");
       const accountBalance=tanvir1('account');
       if( accountBalance<userM2  ){
         alert(" Sorry! You have no Mony");
         return;
      }
   
       const addDonatemon2=tanviradd(userM2, donatemony2);
       const subtractbalance2=subtractMony(accountBalance, userM2);
       document.getElementById('havemony2').innerText=addDonatemon2;
       document.getElementById('account').innerText=subtractbalance2;
});

document.getElementById('add-mony-button3').addEventListener ('click', function(event){
    event.preventDefault();

    const userM2=tanvir("usermony3");

    if(userM2<0){
        alert("ohh! You have some mistake");
        return;
     }
     if(isNaN(userM2)){
        alert("You have sum Mistake.inter Number");
        return; 
     }

     //add time
 const mydate=new Date()
 console.log(mydate.toISOString())
 //history add

const div=document.createElement('div');
div.innerHTML=`
  <div class='bg-black border-2 rounded-xl my-4 px-5 mx-20 py-5' >
  <h4 class="text-white text-2xl pb-3">Donation</h4>
  <p class="text-white text-xl my-3">${userM2} Aid for Injured in the Quota Movement </P>
   <p>${mydate}</P>
  </div>
`
// add history from div
 document.getElementById('donation-history').appendChild(div);
    const  donatemony2=tanvir1("havemony3");
    const accountBalance=tanvir1('account');
    
    if( accountBalance<userM2  ){
      alert(" Sorry! You have no Mony");
      return;
   }

    const addDonatemon2=tanviradd(userM2, donatemony2);
    const subtractbalance2=subtractMony(accountBalance, userM2);
    document.getElementById('havemony3').innerText=addDonatemon2;
    document.getElementById('account').innerText=subtractbalance2;
});

// history option
document.getElementById('history').addEventListener('click',function(){

   hiddenbutton('history-div');
});

//donation option

document.getElementById('donation-b').addEventListener('click',function(){

   hiddenbutton('donatebutton');
});