import React from 'react';
import {Link} from 'react-router-dom';


function Shirt({products, onAddToCart}){
    return(
        <div class="col">
        <div class="card inventory-card shadow text-center h-100">
          <img src="images/shirt.jpeg" class="card-img-top thumb" alt="sample-shirt"/>

          <div class="card-body">
            <h2 class="card-title title">{products.name}</h2>
            <p class="price">{products.price.formatted_with_symbol}</p>
            <hr/>
            <h2 class="brand"><i>Brand</i></h2>
            <p class="size">Size: Small</p>
            <p class="category">Category: Shirt</p>
            <p class="card-text text-muted description" dangerouslySetInnerHTML={{__html:products.description}} />
          
            <button class="btn btn-dark"><Link to='/Store' class="nav-link text-light text-uppercase" onClick={()=> onAddToCart(products.id, 1)}>Add to Cart</Link></button>
            
          </div>



        </div>
        

      </div>


      
    )
}

export default Shirt;