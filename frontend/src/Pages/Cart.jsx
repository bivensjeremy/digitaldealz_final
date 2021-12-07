import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const renderEmptyCart = () => (
    <div>
      <h5 class="text-center"> You have no items in your shopping cart. <br />
      <Link to="/Store">Start shopping now!</Link></h5>
    </div>
  );
   if (!cart.line_items) return 'Shopping Cart Loading. Please Wait...';

  const renderCart = () => (
    <div>
      {cart.line_items.map((item) => (
        <div key={item.id}>
          <CartItem item={item}
          handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      ))}

    <div>
      <div class="position-relative">
        <h2 class="text-center text-black position-absolute end-0">Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
      </div>

      <div class="nav">
        <button type="button" class="btn btn-danger me-4" onClick={handleEmptyCart}>Empty Cart</button>
        
        <button type="button" class="btn btn-primary"><Link to="/Checkout" class="nav-link text-light">Checkout</Link></button>

        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div class="container">
        <h1 class="text-uppercase text-center text-black cart-title">Cart</h1>
        <hr class="store-header-line" />
        <h1 class="text-uppercase text-center text-black cart-title-long mb-5">Your Shopping Cart</h1>

        { !cart.line_items.length ? renderEmptyCart() : renderCart() }
      </div>
  </div>
    


  );

};

export default Cart;