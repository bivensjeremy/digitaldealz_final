import React from 'react';

function Footer(){
    return (
        <div>
            <footer class="footer fixed-bottom mt-auto position-relative">
            <div class="footer-items position-absolute bottom-0 start-50 translate-middle-x">
                
                <a class="footer-link mx-2 text-dark" href="https://www.facebook.com/bivens.jeremy"><i class="fab fa-facebook"></i> Facebook  </a>
                
                <a class="footer-link mx-2 text-dark" href="https://twitter.com/"><i class="fab fa-twitter"></i> Twitter  </a>
                
                <a class="footer-link mx-2 text-dark" href="https://www.instagram.com/bivensjeremy/"><i class="fab fa-instagram"></i> Instagram</a>

                <div class="text-muted">Powered by Bivens Blueprint</div>
            </div>
        </footer>
        </div>
        
    );
};

export default Footer;