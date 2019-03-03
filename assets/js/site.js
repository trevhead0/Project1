(function(){  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice'); // not afraid to put it
    return;
  }
  // Da Dom offers you a favor you cant refuse
  document.addEventListener('DOMContentLoaded', function(){
    // Make this top of everything!
    // Declare variables
    var form=document.querySelector('#form');
    var submit=document.querySelector('#submit');
    var yourname=document.querySelector('#yourname');
    var contact=document.querySelector('#yourcontact');
    // declare event listeners for focus and blur
    yourname.addEventListener('focus', focus);
    contact.addEventListener('focus', focus);
    // blur is meant for throwing an error after the user is finished typing.
    yourname.addEventListener('blur', blur);
    contact.addEventListener('blur', blur);
    // hide submit until ready!
    submit.setAttribute('disabled', 'disabled');

    form.addEventListener('keyup', function(){
      var name_value=yourname.value;
      var contact_value=contact.value;
      check(namecheck(name_value), emailcheck(contact_value), phonecheck(contact_value));
    });
  });
  // toggle function for focus css
  function focus(){
    // console.log('yeah they click me!');
    if (document.querySelector('.focus')!==null){// this is to throw out error when no focus
      document.querySelector('.focus').classList.toggle('focus');}
    this.classList.toggle('focus');
  }
  // Check if box is empty
  function namecheck(namecheck){
    if (namecheck===''){
      return false;}
    else {
      return true;
    }
  }
  // Check if contact info matches a phone
  function phonecheck(contact){
    var contact_value = contact;
    // Remove all non-digit characters from the telephone input's value
    var clean_number = contact_value.replace(/\D/g, '');
    // Remove any 1 apppearing at the start of the number
    var sanitized_number = clean_number.replace(/^1/, '');
    // Finally, check to see if the number is 10 digits long
    if (sanitized_number.length === 10) {
      console.log('That number looks great!');
      // If so, allow the form to be submitted
      return true;
    }
    else {
      return false;
    }
  }
  // Check to see if contact info matches email
  function emailcheck(contact){
    // regex makes alpha1 or more>>with an @ sign>> with another 1 or more alpha//a dot//and another 1 or more alpha
    var re= (/\w+@\w+\.\w+/g);
    var contact_value= contact;
    if (contact_value.match(re)){
      console.log("email looks great!");
      return true;}
    else {
      return false;
    }
  }
  // Check function for enabling submit if name and either email or phone is correct
  function check(gtgn, gtge, gtgp){
    var submit=document.querySelector('#submit');
    if (gtgn&&(gtge || gtgp)){
      submit.removeAttribute('disabled');}
    else{
      submit.setAttribute('disabled', 'disabled');}
  }
  // Final check and enable error messages if box does not meet requirements.
  function blur(){
    var yourname=document.querySelector('#yourname');
    var contact=document.querySelector('#yourcontact');
    var en = document.querySelector('.errorn');
    var ec= document.querySelector('.errorc');

    // check blur out to show error message on name
    if(event.target===yourname){
      if(namecheck(yourname.value)){
        if (en.classList.contains('nv')){
          return;
        }
        else{
          en.classList.toggle('nv');
        }
      }
      else{
        if(en.classList.contains('nv')){
          en.classList.toggle('nv');
        }
        else{
          return;
        }
      }
    }
    // check blur out to show error message on contact
    if(event.target===contact){
      if(emailcheck(contact.value)|| phonecheck(contact.value) || contact.value===""){
        if (ec.classList.contains('nv')){
          return;
        }
        else {
          ec.classList.toggle('nv');
        }
      }
      else{
        if(ec.classList.contains('nv')){
          ec.classList.toggle('nv');
        }
        else{
          return;
        }
      }
    }
  }
})();
