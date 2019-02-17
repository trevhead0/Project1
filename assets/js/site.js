(function(){  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser.
    console.log('Old browser, or you turned off js. Noice'); // not afraid to put it
    return;
  }
  else
  {
    console.log("we are good");
  }
})();
// var menu = document.querySelector('#signup-process');
document.addEventListener('DOMContentLoaded', function(){
  var my_submit=document.querySelector('#submitbut');
  var my_name=document.querySelector('#actual-name');
  var my_business=document.querySelector('#business');
  var my_services=document.querySelector('#services');
  var page=0;
  console.log('OMG the DOM is loaded!!!!');// I do not know why you hide these
  // Disable the submit button until we are reasonable sure
  // that we have a ten-digit phone number
  my_submit.setAttribute('disabled', 'disabled');
  // menu.classList.toggle('nv');
  document.querySelector('#namenext').classList.toggle('nv');
  document.querySelector('#businessnext').classList.toggle('nv');
  my_business.classList.toggle('nv');
  my_services.classList.toggle('nv');

  document.addEventListener('click', function(e){
    if (e.target===document.querySelector('#next1') || (e.target===document.querySelector('#navbusiness')&&page!==1)){
      if(page===0)
      {
        my_name.classList.toggle('nv');
      }
      else
      {
        my_services.classList.toggle('nv');
      }
      my_business.classList.toggle('nv');
      page=1;
    }
    else if(e.target===document.querySelector('#navname')&&page!==0){
      if (page===1)
      {
        my_business.classList.toggle('nv');
      }
      else
      {
        my_services.classList.toggle('nv');
      }
      my_name.classList.toggle('nv');
      page=0;
    }
    else if(e.target===document.querySelector('#next2') || (e.target===document.querySelector('#navservices')&&page!==2)){
      if (page===1)
      {
        my_business.classList.toggle('nv');
      }
      else
      {
        my_name.classList.toggle('nv');
      }
      my_services.classList.toggle('nv');
      page=2;
    }
  });
});
