'use strict'

var hotelSearchButton = document.querySelector( '.button.hotel-search' );
hotelSearchButton.addEventListener( 'click', openHide );

function openHide () {
  var form = document.querySelector( '.form-search' );
  form.classList.toggle( 'hide-mode' );
}
