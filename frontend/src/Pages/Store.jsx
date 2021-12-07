import React  from 'react';
import Shirt from '../components/Shirt'

const Store = function({PantsProducts, ShortsProducts, GameProducts, HatProducts, ShirtProducts, onAddToCart}){

return (
    <div>
        <h1 class="text-uppercase text-center text-black store-header">Store</h1>
        <hr class="store-header-line" />
        
        <h2 class="text-uppercase text-center ps-4 fs-1 text-black">Shirts</h2>
        
        <div class="inventory row row-cols-2 row-cols-md-6 g-3">
            {ShirtProducts.map((products) => (
                <Shirt 
                products={products} 
                onAddToCart={onAddToCart} />
            ))}
        </div>

        <h2 class="text-uppercase text-center ps-4 fs-1 text-black">Pants</h2>
        
        <div class="inventory row row-cols-2 row-cols-md-6 g-3">
            {PantsProducts.map((products) => (
                <Shirt 
                products={products} 
                onAddToCart={onAddToCart} />
            ))}
        </div>

        <h2 class="text-uppercase text-center ps-4 fs-1 text-black">Shorts</h2>
        
        <div class="inventory row row-cols-2 row-cols-md-6 g-3">
            {ShortsProducts.map((products) => (
                <Shirt 
                products={products} 
                onAddToCart={onAddToCart} />
            ))}
        </div>

        <h2 class="text-uppercase text-center ps-4 fs-1 text-black">Hats</h2>
        
        <div class="inventory row row-cols-2 row-cols-md-6 g-3">
            {HatProducts.map((products) => (
                <Shirt 
                products={products} 
                onAddToCart={onAddToCart} />
            ))}
        </div>

        <h2 class="text-uppercase text-center ps-4 fs-1 text-black">Games</h2>
        
        <div class="inventory row row-cols-2 row-cols-md-6 g-3">
            {GameProducts.map((products) => (
                <Shirt 
                products={products} 
                onAddToCart={onAddToCart} />
            ))}
        </div>
    
    </div>
    );
};

export default Store;