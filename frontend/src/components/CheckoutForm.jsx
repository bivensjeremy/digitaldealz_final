import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

function CheckoutForm({ checkoutToken , onCaptureCheckout}) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [addressLine1, setadressLine1] = useState('');
  const [addressLine2, setaddressLine2] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setzipCode] = useState('');

const customer ={
  "address": {
          "city": city,
          "line1": addressLine1,
          "line2": addressLine2,
          "postal_code": zip,
          "state": state
        },
        "email": email,
        "name": firstName + " " + lastName
} 

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          '/create-payment-intent',
          {
            amount: checkoutToken.live.total_with_tax.raw,
            id: id,
            customer: customer
          },       
        );
        if (response.data.success) {
          setError(null);
          setProcessing(false);
          setSucceeded(true);
          console.log("payment successful!");
          onCaptureCheckout();
        }
      } catch (error) {
        setError("Payment failed");
        setProcessing(false);
        console.log("Payment error: ", error);
      }
    } else {
      console.log(error.message);
    }
      
  };

  const handleChange = async (e) => {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : "");
    };
    
const CARD_ELEMENT_OPTIONS = {
      style: {
        base: {
          color: "#32325d",
          fontFamily: '"Roboto", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "18px",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      },
    };

  return (
    
    <div class="col-md-7 col-lg-8">
    <h3 class="mb-3 fw-bold">Customer Information</h3>

    <form class="needs-validation" novalidate > 
    <div class="row g-2">

      <div class="col-sm-6">
        
        <input type="text" class="form-control" id="firstName" placeholder="First Name" name="firstname" onChange={event => setfirstName(event.target.value)} required/>
        <div class="invalid-feedback">Valid first name required</div>
      </div>

      <div class="col-sm-6">
        <input type="text" class="form-control" id="lastName" placeholder="Last Name" name="lastname" onChange={event => setlastName(event.target.value)} required/>
        <div class="invalid-feedback">Valid last name required</div>
      </div>
      
      <div class="col-12">
        <input type="email" class="form-control" id="email" placeholder="Email" name="email" onChange={event => setemail(event.target.value)}/>
        <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
      </div>
      
      <div class="col-12">
        <input type="text" class="form-control" id="address" placeholder="Street Address" name="addressLine1" onChange={event => setadressLine1(event.target.value)} required />
        <div class="invalid-feedback">Please enter your shipping address.</div>
      </div>
      
      <div class="col-12">
        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite (Optional)" name="addressline2" onChange={event => setaddressLine2(event.target.value)}/>
      </div>

      <div class="col-4">
        <input type="text" class="form-control" id="city" placeholder="City" name="city" onChange={event => setcity(event.target.value)}/>
      </div>
        
      <div class="col-md-4">
        <select class="form-select" id="state" name="state" onChange={event => setstate(event.target.value)} required>
            <option value="">State...</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        <div class="invalid-feedback">Please provide a valid state.</div>
      </div>
        
      <div class="col-md-4">
        <input type="text" class="form-control" id="zip" placeholder="Zip" name="zipCode" onChange={event => setzipCode(event.target.value)} required />
        <div class="invalid-feedback">Zip code required.</div>
      </div>
    </div>
     
    <hr class="my-4" />

    </form> 

    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
      <button disabled={processing || succeeded} class='btn btn-primary w-25 mx-auto mt-3'>
        <span id="button-text">
        {processing ? (
          <div class="spinner-border text-light" role="status"></div>
        ) : (
          "Pay:"
        )}
      </span> {checkoutToken.live.total_with_tax.formatted_with_symbol} </button>
    </form>

    </div>
  
  );
};

export default CheckoutForm