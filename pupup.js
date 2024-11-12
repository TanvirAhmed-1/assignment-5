
  // Function show  user clicks "Donate Now"
  function openConfirmation() {
    const userMonyCome=tanvir('usermony');
    console.log(userMonyCome);
    if(userMonyCome<0){
        return;
    }
   if(isNaN(userMonyCome)){
    return;
   }
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

    