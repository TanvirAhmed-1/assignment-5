
  // Function show  user clicks "Donate Now"
  function openConfirmation() {
    const userMonyCome=tanvir('usermony');
    const u=tanvir('usermony2');
    const u2=tanvir('usermony3');
    if(userMonyCome<0 || u<0 || u2<0){
        return;
    }

   if(isNaN(userMonyCome)){
    return;
   }

//    if(isNaN(u)){
//     return;
//    }

//    if(isNaN(u2)){
//     return;
//    }

      document.getElementById('confirmationModal').classList.remove('hidden');
  }

  // Function to close the confirmation modal
  function closeConfirmation() {
      document.getElementById('confirmationModal').classList.add('hidden');
  }

//   FAQ page
function goToPage2(){
    window.location.href = 'faq.html' ;
};

// home page function
function homepage(){
    window.location.href='index.html';
};

    