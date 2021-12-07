import React from 'react';

function MessageSent(){
    return (
        <div>
            <h1 class="text-uppercase text-center text-black contact-title">Contact Me</h1>
            <hr class="store-header-line" />
            <h1 class="text-uppercase text-center text-black cart-title-long mb-5">Thank you, Your message has been sent!</h1>
            
            <div class="container contact-form">
                <div class="row mx-auto">
                    <div class="col-md-12">
                        <img src="images/paperplane.png" alt="paper-plane" class="w-100 p-3" />
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default MessageSent;