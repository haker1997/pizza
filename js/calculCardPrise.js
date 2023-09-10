function caclulCardPrise() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriseEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cardDeliveryCost  = document.querySelector('[data-cart-delivery]');



    let totalPrise  = 0;
    cartItems.forEach(function (item){
        const priceEl = item.querySelector('.price__currency');

        const amountEl = item.querySelector('[data-counter]');
         
        const currentPrise  = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrise +=currentPrise; 
        

    })
    // aratam pretul in cos
    totalPriseEl.innerText = totalPrise;

    if (totalPrise > 0){
        cardDeliveryCost.classList.remove('none');
       
    }else{
        cardDeliveryCost.classList.add('none');
    }
    if (totalPrise >=600){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Gratis';


    } else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText  = '50 lei';


    }
    
}