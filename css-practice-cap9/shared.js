let backdrop = document.querySelector( '.backdrop' );
let selectedPlanButtons = document.querySelectorAll( '.plan button' );
let modal = document.querySelector( '.modal' );
let btnNo = document.querySelector( '#modal__btn--no' );
let toggleButton = document.querySelector( '.toggle-button' );
let mobileNav = document.querySelector( '.mobile-nav' );

for ( let i = 0; i < selectedPlanButtons.length; i++ ) {
    selectedPlanButtons[i].addEventListener( 'click', function( ) {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add( 'open' );
        backdrop.classList.add( 'open' );
    })
} 

backdrop.addEventListener( 'click', function( )  {
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none';
    //backdrop.classList.remove( 'open' );
    mobileNav.classList.remove( 'open' );
    closeModal();
});
if ( btnNo ) {
btnNo.addEventListener( 'click', closeModal );
}

function closeModal( ) {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal) {
        modal.classList.remove( 'open' );
    }
    backdrop.classList.remove( 'open' );
}

toggleButton.addEventListener( 'click', function( ) {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add( 'open' );
    backdrop.classList.add( 'open' );
});








