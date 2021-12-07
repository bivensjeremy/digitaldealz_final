import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../components/CheckoutForm';
import ReviewCart from '../components/ReviewCart';
import { commerce } from '../lib/commerce';

const promise = loadStripe(process.env.REACT_APP_STRIPE);

const Checkout = function({cart, onCaptureCheckout}) {
    const [checkoutToken, setCheckoutToken] = useState(null);
    useEffect(() => {
    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token);
        } catch (error){
            console.log("There was an error generating the checkout token", error)
        }
    };
    generateToken();
}, [cart]);

    return (
        <div>
            <h1 class="text-uppercase text-center text-black faq-title">Checkout</h1>
            <hr class="store-header-line" />

            <div class="container">
                    <div class="p-5">
                    <div class="row g-5">

                        { checkoutToken && <ReviewCart checkoutToken={checkoutToken}
                        totalItems={cart.total_items} /> }
                        
                        {/* { checkoutToken &&<Address /> } */}

                        <Elements stripe={ promise }>
                            { checkoutToken && <CheckoutForm checkoutToken={checkoutToken} onCaptureCheckout={onCaptureCheckout} /> }
                        </Elements>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}









export default Checkout
