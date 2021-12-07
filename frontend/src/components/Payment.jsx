import React from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const Payment = function( {checkoutToken, onCaptureCheckout} ){
   const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } =  await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if(error) {
        console.log(error);
    } else {
        const orderData = {
            line_items: checkoutToken.live.line_items,
            // customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
            // fulfillment: { shipping_method: shippingData.shippingOption },
            payment: {
                gateway: 'stripe',
                stripe: {
                    payment_method_id: paymentMethod.id
                }
            }
        }
        onCaptureCheckout(checkoutToken.id, orderData);

    }
   }
    return (
    
        <div>
            <div><h3 class="mb-3 fw-bold">Payment Method</h3></div>
            
            <Elements stripe={promise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit ={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <div class="d-grid gap-2 mx-auto col-3 mt-3">
                                <button class="btn  btn-secondary" type="button"><Link to="/Cart" class="text-light"></Link>Back</button>
                                <button class="btn btn-primary" type="submit" disabled={!stripe}> Pay  </button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
            

        </div>




            
        );
    };
    
    export default Payment;
