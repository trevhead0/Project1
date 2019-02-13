(function(){
  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice');//not afraid to put it
    return;
  }

  var my_submit = document.querySelector('#submit');
  var menu = document.querySelector('#signup-process');

  document.addEventListener('DOMContentLoaded',function(){
    console.log('OMG the DOM is loaded!!!!');//I do not know why you hide these
    // Disable the submit button until we are reasonable sure
    // that we have a ten-digit phone number
    menu.classList.toggle('nv');
    my_submit.setAttribute('disabled','disabled');
  });

  var tel_input = document.querySelector('#telephone');
  tel_input.addEventListener('focus', function(){
    console.log('OMG somebody focused on the telephone input');
  });
  tel_input.addEventListener('blur', function(){
    console.log('OMG somebody navigated away from the telephone input');
  });

  tel_input.addEventListener('keyup',function(){
    // Remove all non-digit characters from the telephone input's value
    var clean_number = this.value.replace(/\D/g,'');
    // Remove any 1 apppearing at the start of the number
    var sanitized_number = clean_number.replace(/^1/,'');
    // Finally, check to see if the number is 10 digits long
    if (sanitized_number.length === 10) {
      console.log('That number looks great!');
      // If so, allow the form to be submitted
      phone_submit.removeAttribute('disabled');
    }

  });


}());
