
import React, { useState, useEffect } from 'react';
import {Route, useHistory, Switch} from 'react-router-dom';
import { commerce } from './lib/commerce';

import Landing from './Pages/Landing';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Store from './Pages/Store';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Confirmation from './Pages/Confirmation';
import MessageSent from './components/MessageSent';


import Header from './components/Header';
import Footer from './components/Footer';


function App(){
  const [products, setProducts] = useState([]);
  const [ShirtProducts, setShirtProducts] = useState([]);
  const [PantsProducts, setPantsProducts] = useState([]);
  const [HatProducts, setHatProducts] = useState([]);
  const [ShortsProducts, setShortsProducts] = useState([]);
  const [GameProducts, setGameProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const history = useHistory();

  const fetchProducts = async() => {
      const {data} = await commerce.products.list();
      setProducts(data);
  }

  const fetchShirtProducts = async() => {
    const {data} = await commerce.products.list({
      category_slug: ['shirt']
    });
    setShirtProducts(data);
  }

  const fetchPantsProducts = async() => {
    const {data} = await commerce.products.list({
      category_slug: ['pants']
    });
    setPantsProducts(data);
  }

  const fetchHatProducts = async() => {
    const {data} = await commerce.products.list({
      category_slug: ['hat']
    });
    setHatProducts(data);
  }

  const fetchShortsProducts = async() => {
    const {data} = await commerce.products.list({
      category_slug: ['shorts']
    });
    setShortsProducts(data);
  }

  const fetchGameProducts = async() => {
    const {data} = await commerce.products.list({
      category_slug: ['video-game']
    });
    setGameProducts(data);
  }

  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productID, quantity) => {
      const {cart} = await commerce.cart.add(productID, quantity);
      setCart(cart);
  }

  const handleUpdateCartQty = async (productID, quantity) =>{
    const {cart} = await commerce.cart.update(productID, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async(productID) =>{
    const {cart} = await commerce.cart.remove(productID);
    setCart(cart);
  }

  const refreshCart = async() => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async() => {
    try {
      refreshCart();
      history.push('/Confirmation');
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  };

  const handleEmptyCart = async() =>{
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  };


  
  useEffect(() =>   {
      fetchProducts();
      fetchShirtProducts();
      fetchPantsProducts();
      fetchHatProducts();
      fetchShortsProducts();
      fetchGameProducts();
      fetchCart();
  }, []);


  return (
    <div>
      <div>
        <Header totalItems={cart.total_items} />
      </div>
      <Switch>
        <Route path='/' exact component={Landing} >
          <Landing
          products={products}
          PantsProducts={PantsProducts}
          ShirtProducts={ShirtProducts}
          GameProducts={GameProducts}
          onAddToCart={handleAddToCart}
          />
        </Route>
        
        <Route path='/About' component={About}/>
        <Route path='/FAQ' component={FAQ}/>
        <Route path='/Store'>
          <Store  
            PantsProducts={PantsProducts}
            ShirtProducts={ShirtProducts}
            HatProducts={HatProducts}
            ShortsProducts={ShortsProducts}
            GameProducts={GameProducts}
            onAddToCart={handleAddToCart} />
        </Route>
        <Route path='/Contact' component={Contact}/>

        <Route path='/Cart'>
          <Cart 
            products={products}
            cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart ={handleEmptyCart}
          />
        </Route>

        <Route path='/Checkout'>
          <Checkout 
            component={cart} 
            cart={cart}
            order={order}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
            totalItems={cart.total_items}
          />
        </Route>
        <Route path='/MessageSent' component={MessageSent} />
        <Route path='/Confirmation' component={Confirmation}/>

      </Switch>

      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default App;
