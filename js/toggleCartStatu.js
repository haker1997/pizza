function toggleCartStatus(){
    
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBagage = document.querySelector('[data-cart-empty]');

    const orderFrom = document.querySelector('#order-form');

    console.log(cartWrapper.children.length);
    if (cartWrapper.children.length > 0){
       
        cartEmptyBagage.classList.add('none');
        orderFrom.classList.remove('none');

    }else{
       
        cartEmptyBagage.classList.remove('none');
        orderFrom.classList.add('none');
    }
 
}