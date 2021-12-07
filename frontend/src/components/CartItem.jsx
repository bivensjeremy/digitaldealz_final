import React from 'react';


const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {

  return (
    <div>
      <container>
        <div class="subtotal-cart card mb-3">
          <div class="row w-100%">

            <div class="col m-auto">
            <img class="product_image mw-100" src={item.media.source} alt={item.name} />
            </div>
          
          <div class="col-md-8">
            <div class="card-body">

              <h4 class="card-title">{item.name}</h4>
              
              
              <button type="button" class="btn btn-secondary me-3" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>

              {item.quantity}

              <button type="button" class="btn btn-dark mx-3" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>

              <button type="button" class="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove From Cart</button>
              

            </div>
          </div>

          <div class="col m-auto">
            <h4>Item Price</h4>
            <h3>
              {item.line_total.formatted_with_symbol}
            </h3>
          
            </div>

        </div>
      </div>
    </container>
  </div>
    
  );
};

export default CartItem;