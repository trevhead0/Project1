(function(){  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice'); // not afraid to put it
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){

    // Make this top of everything!
    // Declare variables
    var gtgn=false;
    var gtge=false;
    var gtgp=false;
    var submit=document.querySelector('#submit');
    var yourname=document.querySelector('#yourname');
    var email=document.querySelector('#youremail');
    var phone=document.querySelector('#phonenumber');

    console.log('OMG the DOM is loaded!!!!');
    // hide submit until ready!
    yourname.addEventListener('focus', focus);
    email.addEventListener('focus', focus);
    phone.addEventListener('focus', focus);
    submit.setAttribute('disabled', 'disabled');
    yourname.addEventListener('input', function(){
      if (this.value===''){
        gtgn=false;}
      else {
        gtgn=true;
      }
      check();
    });

    // this is email validation with regex
    email.addEventListener('input', function(){
      // regex makes alpha1 or more>>with an @ sign>> with another 1 or more alpha//a dot//and another 1 or more alpha
      var re= (/\w+@\w+\.\w+/g);
      if (this.value.match(re)){
        console.log(this.value);
        gtge=true;}
      else {
        gtge=false;
      }
      check();
    });

    // this is validation for phone number
    phone.addEventListener('input', function(){
      // Remove all non-digit characters from the telephone input's value
      var clean_number = this.value.replace(/\D/g, '');
      // Remove any 1 apppearing at the start of the number
      var sanitized_number = clean_number.replace(/^1/, '');
      // Finally, check to see if the number is 10 digits long
      if (sanitized_number.length === 10) {
        console.log('That number looks great!');
        // If so, allow the form to be submitted
        gtgp=true;
      }
      else {
        gtgp=false;
      }
      check();
    });

    // check function for enabling submit
    function check(){
      if (gtgn&&(gtgp===true || gtge===true)){
        submit.removeAttribute('disabled');}
      else{
        submit.setAttribute('disabled', 'disabled');}
    }

    // toggle function for focus css
    function focus(){
      // console.log('yeah they click me!');
      if (document.querySelector('.focus')!==null){// this is to throw out error when no focus
        document.querySelector('.focus').classList.toggle('focus');}
      this.classList.toggle('focus');
    }

  });


})();
