import React from 'react';

const ReviewCart = function( {checkoutToken, totalItems} ){
    
    return (
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">Cart Summary
        <span class="badge bg-primary rounded-pill">{totalItems}</span>
        </h4>
        
        <ul class="list-group mb-3">
          {checkoutToken.live.line_items.map((products) => (
            <div>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">{products.name}</h6>
                  <small class="text-muted">{`Quantity: ${products.quantity}`}</small>
                </div>
                <span class="text-muted">{products.line_total.formatted_with_symbol}</span>
              </li> 
            </div>
          ))}
          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-secondary">
              <h6 class="my-0">Shipping</h6>
              <small>Standard Shipping</small>
            </div>
            <span class="text-secondary">Free</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>{checkoutToken.live.subtotal.formatted_with_symbol}</strong>
          </li>
        </ul>
      </div>
            
        );
    };
    
    export default ReviewCart;