'use strict'

let hotelSearchButton = document.querySelector( '.button.hotel-search' );
hotelSearchButton.addEventListener( 'click', openHide );

function openHide () {
  let form = document.querySelector( '.form-search' );
  form.classList.toggle( 'hide-mode' );
}
