import React from 'react';
import {Link} from 'react-router-dom';


function FeaturedCard({products, onAddToCart}){

const featuredGame = products.GameProducts[Math.floor(Math.random() * products.GameProducts.length)]


    // const featuredShirt = products.ShirtProducts[Math.floor(Math.random()* products.ShirtProducts.length)]

    // const featuredGame = products.GameProducts[Math.floor(Math.random()* products.GameProducts.length)]
    
    // const featuredPants = products.PantsProducts[Math.floor(Math.random()* products.PantsProducts.length)]

    return(
        <div class="card">
  <div class="card-header">
    {/* <h1 class="card-title">{featuredGame.name}</h1> */}
  </div>
  
  <div class="card-body">
      {/* <img class="product_image rounded" src={featuredShirt.media.source} alt={featuredShirt.name} width="30%"/> */}
      <br/>
      <button class="btn btn-dark"><Link to='/Store' class="nav-link text-light text-uppercase" onClick={()=> onAddToCart(products.id, 1)}>Add to Cart</Link></button> 
  </div>
  
</div>
    )
}

export default FeaturedCard;