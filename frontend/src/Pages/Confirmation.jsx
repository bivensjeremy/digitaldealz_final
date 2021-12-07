import React from 'react';
import {Link} from 'react-router-dom';

const Confirmation = function() {
  
      return (
        <div>
            <h1 class="text-uppercase text-center text-black contact-title">Confirmation</h1>
            <hr class="store-header-line" />
            <div>
            <h5 class="text-center my-5"> Thank you for your order! A receipt has been emailed to you. Please feel free to contact me at contact@bivensblueprint.com. 
            
            <br />
            <button class="btn btn-dark btn-lg" type="button"><Link to='/' class="nav-link text-light">Back Home</Link></button>
            </h5>
            </div>
        </div>
        
            
            
      );
    

  };
  
  export default Confirmation;
