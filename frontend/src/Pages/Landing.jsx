import React from 'react';
import {Link} from 'react-router-dom';
import FeaturedCard from '../components/FeaturedCard'

function Landing(products, PantsProducts, ShirtProducts, GameProducts, onAddToCart){
    return (
        <div>
          <div class="title-section bg-light vh-100">
            <div class="taglines container-fluid ms-5"> for Bivens Blueprint <hr/>
              <h1 class="display-1 fw-bold">DIGITAL DEALZ</h1>
              <p class="col-md-8 fs-6">Shop the best, tech and high-end fashion from the 2000s. Playstation 3 games and clothing Brands to include Miskeen, Girbaud, Rocawear, ENYCE and more!</p>
              <button class="btn btn-dark btn-lg" type="button"><Link to='/Store' class="nav-link text-light">Shop Now</Link></button> 
            </div>
        </div>

{/* Features Section */}
<section id="features-section" class="bg-dark p-5">
<div class="features row">
 <div class="feature-one col-lg-4">
   <h2>Nostalgia</h2>
   <i class="fas fa-compact-disc py-3 fa-3x"></i>
   <p>Dive into my collection of games and clothing from 2006-2010! I can't promise it will for you, but these clothes and games bring back the memories. Many clothes are in great condition. Some are worn. Take your time and browse around!</p>
 </div>
 <div class="feature-two col-lg-4">
   <h2>Only the Best</h2>
   <i class="fas fa-chart-line py-3 fa-3x"></i>
   <p>No bootlegs! Only authentically purchased items. Some games were purchased used, but nothing is a knockoff! Rest assured you're shopping for the best quality.</p>
 </div>
 <div class="feature-three col-lg-4">
   <h2>Quality is Key</h2>
   <i class="fas fa-key py-3 fa-3x"></i>
   <p>From Coogi clothes worn ONCE to custom painted Miskeen t-shirts, these items are the real deal.  You can shop around, but you're getting the best value here!</p>
 </div>
</div>
</section>
        
{/* Highlighted Item */}

<section id="highlighted-item-section">
  <div class="highlight container">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <h4 class="question">"All our dreams can come true, if we have the courage to pursue them."</h4>
    <p><em>Walt Disney</em></p>
    </div>
    <div class="carousel-item">
      <h4 class="question">“Don’t worry about being successful but work toward being significant and the success will naturally follow.”</h4>
      <p><em>Oprah Winfrey</em></p>
    </div>
    <div class="carousel-item">
      <h4 class="question">“A ship in the harbor is safe, but that is not what ships are built for.”</h4>
      <p><em>John A. Shedd</em></p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

   </div>
 </section>

{/* Call to Action Section */}
<section id="cta-section" class="bg-dark">
   <div class="features container">
     <div class="cta-info">
       <h5>Digital Dealz is an online thrift shop that offers the most affordable, high quality men's tops, bottoms, shoes and other random accessories that you can buy online.</h5>

       <h5>Don't waste your time on eBay or other Swap & Shops searching for your threads. Buy directly from me and get trustworthy clothing</h5>

       <h2>What are you waiting for?</h2>
       <button class="btn btn-light"><Link to='/Store' class="nav-link">Shop Now</Link></button>
     </div>
   </div>
 </section>

 {/* Mailing List Section */}
<section id="mailing-list-section">
  <div>
    <div id="mc_embed_signup">
      <form action="https://bivensblueprint.us1.list-manage.com/subscribe/post?u=4e745681731d361e646ec1185&amp;id=bfd45688b2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h2 class="text-uppercase fs-3 text fw-bold">Stay Updated</h2>
          <p class="text-uppercase">The latest updates and new additions straight to your inbox</p>  
            
            <div class="mc-field-group">
                <label for="mce-EMAIL"></label>
                
                <input type="email" placeholder="Enter your email address" name="EMAIL" class="subscribe-email required email" id="mce-EMAIL" />
            </div>

            <div id="mce-responses" class="clear">
                <div class="mailer-response response" id="mce-error-response">
                </div>
                <div class="mailer-response response" id="mce-success-response">
                </div>
            </div>    
    
    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
    <div class="signup-required" aria-hidden="true"> <input type="text" name="b_4e745681731d361e646ec1185_bfd45688b2" tabindex="-1" value="" />
    </div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-dark btn-lg" /></div>
    </div>
</form>
</div>


 
 </div>
</section>
</div>
    )
};

export default Landing;