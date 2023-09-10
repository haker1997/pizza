window.addEventListener('click',function(){
    let counter;
    if (event.target.dataset.action ==='plus' || event.target.dataset.action ==='minus') {
        const counterWraper = event.target.closest('.counter-wrapper');
        counter = counterWraper.querySelector('[data-counter]');
    }
    
    //controlam daca elemienut este plus
   if (event.target.dataset.action ==='plus'){
    
     counter.innerText  =  ++counter.innerText ;
   }
   // controlam dac elementul este minus
   if (event.target.dataset.action ==='minus'){
    
    if( parseInt(counter.innerText) >1 ){

        counter.innerText  =  --counter.innerText ;

   } else if (event.target.closest('.cart-wrapper')&& parseInt(counter.innerText) === 1 ){
    event.target.closest('.cart-item').remove();


    //arata dac cosul este plin/gol
    toggleCartStatus();
    caclulCardPrise();
   }
   
   }
   //controlex dac clic pe minus /plus in cos
   if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
    caclulCardPrise();
   }

});