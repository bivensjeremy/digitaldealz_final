import React from 'react';
import {Link} from 'react-router-dom';

function About(){
    return (
        <div>
            <h1 class="text-uppercase text-center text-black about-title">About</h1>
            <hr class="store-header-line" />
            <h1 class="text-uppercase text-center text-black cart-title-long mb-5">About this thrift shop</h1>
            
            <div class="container">
                <section class="about-container bg-dark">
                   
            <h3 class="fw-bold text-uppercase text-light">The Website</h3>
            <p class="text-light my-3">
                First and foremost, this is a real working website. Yes, the inventory is real, the shopping cart, payment information and all other functions work. <em>If you buy something and proceed through the shopping cart,</em> you will be charged, and I will ship it. Please read through the <Link to='/FAQ'>FAQs</Link> if you have general questions about how this site works. 
            </p>
            <h3 class="fw-bold text-uppercase text-light">The Project</h3>
            <p class="text-light my-3">
                I am a web developer.  This website is a project to represent my knowledge in React.  Without going into much detail as to what React is (for the non-coders in the house), a great way to get practice in this coding framework is through a commerce website. Use it as an example of what I can do for you in your personal website. For the coders, this project uses React, Node JS, and Bootstrap.
            </p>
            <h3 class="fw-bold text-uppercase text-light">The Inventory</h3>
            <p class="text-light my-3">
                Where did all these clothes and items come from, you ask? In my college days, between 2006-2012, I worked in a clothing store in the mall.  As such, I had access to all the latest fashion! As you may remember, the 2000s was a crazy time for hip-hop.  We liked our clothes with extra breathing room. Many of the clothes are much bigger than I can ever hope to fit 🤣 ! What this means to you is, most are extremely lightly worn. Because they've always been in such good condition, I have been reluctant to throw them away.  I've always intended to sell them at the flea market, but I have no desire to wheel & deal, haggle and negotiate.
            </p> 
    
            <button class="btn btn-light"><Link to='/Store' class="nav-link">Take me to the Store!</Link></button>      
        </section>
            </div>
            
        </div>
        
    );
};

export default About;