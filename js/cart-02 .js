 const cartWrapper = document.querySelector('.cart-wrapper');
// cautam click pe sait
window.addEventListener('click', function (event){
// cautam clic pe carzina
    if(event.target.hasAttribute ('data-cart')){

        //caut cartocica in care sa facut clic 
         const card = event.target.closest('.card');
      // string informatia din cartocica
       const productInfo ={
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
        
       };
       
        const intemInCart = cartWrapper.querySelector(`[data-id ="${productInfo.id}"]`);
        
        //daca productul este in cos
        if (intemInCart){
           const counterElement = intemInCart.querySelector('[data-counter]');
           counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else{

        
            //daca productul nui in cos

       
    const cartItemHTML =`<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
</div>`;

      
      cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML);

        } 
        //dam in jos la 1
        card.querySelector('[data-counter]').innerText ='1';
        //arata statusul cosului goala/plina
        toggleCartStatus();
        //socoate in cos
        caclulCardPrise();
    }
});
