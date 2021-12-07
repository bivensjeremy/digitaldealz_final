import React from 'react';


function Shirt({products, onAddToCart}){
    return(
        <div class="col">
        <div class="card inventory-card shadow text-center h-100">
            <img class="product_image mw-100 rounded" src={products.media.source} alt={products.name} />
          <button class="btn btn-outline-dark"><a class="text-decoration-none" href={products.media.source}>Click to Enlarge</a></button>
          <div class="card-body">
            <h2 class="card-title title">{products.name}</h2>
            <p class="price">{products.price.formatted_with_symbol}</p>
            <hr/>
            <p class="card-text text-muted description" dangerouslySetInnerHTML={{__html:products.description}} />

          { products.inventory.available < 1 ? <button class="btn btn-dark disabled nav-link text-light text-uppercase">Sold Out</button> 
          : 
          <button class="btn btn-dark text-light text-uppercase" onClick={()=> onAddToCart(products.id, 1)}>Add to Cart</button> }
               
          </div>
        </div>
      </div> 
    )
}

export default Shirt;