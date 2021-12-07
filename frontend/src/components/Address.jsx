import React  from 'react';
import Payment from '../components/Payment';
import CheckoutForm from '../components/CheckoutForm';

const Address = function(){

return (
<div class="col-md-7 col-lg-8 text-start">
  <h3 class="mb-3 fw-bold">Billing Address</h3>

  <form class="needs-validation" novalidate>
    <div class="row g-2">

      <div class="col-sm-6">
        
        <input type="text" class="form-control" id="firstName" placeholder="First Name" />
        <div class="invalid-feedback">Valid first name required</div>
      </div>

      <div class="col-sm-6">
        <input type="text" class="form-control" id="firstName" placeholder="Last Name" />
        <div class="invalid-feedback">Valid last name required</div>
      </div>
      
      <div class="col-12">
        <input type="email" class="form-control" id="email" placeholder="Email" />
        <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
      </div>
      
      <div class="col-12">
        <input type="text" class="form-control" id="address" placeholder="Street Address" required />
        <div class="invalid-feedback">Please enter your shipping address.</div>
      </div>
      
      <div class="col-12">
        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite (Optional)" />
      </div>
        
      <div class="col-md-8">
        <select class="form-select" id="state" required>
            <option value="">Choose...</option>
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
        <input type="text" class="form-control" id="zip" placeholder="Zip" required />
        <div class="invalid-feedback">Zip code required.</div>
      </div>
    </div>
   </form>   
    <hr class="my-4" />
      
    {/* <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button> */}
   
    {/* <Payment />  */}

    <CheckoutForm />
    
    </div>
    );
};

export default Address;