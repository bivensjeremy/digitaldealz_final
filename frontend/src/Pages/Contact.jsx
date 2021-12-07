import React, { useState }from 'react';
import {Link, useHistory} from 'react-router-dom';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();
    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    
    const submitRequest = async (e) => {
        e.preventDefault();
        setProcessing(true);
        console.log({ name, email, message });
        const response = await fetch("/Contact", { 
            method: 'POST', 
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({name, email, message}) 
        });
        const resData = await response.json();
        if (resData.status === 'success'){
            setProcessing(false);
            setSucceeded(true);
            history.push('/MessageSent');
        }else if(resData.status === 'fail'){
            setProcessing(false);
            alert("Message failed to send.")
        }
    };
   
    return (
        <div>
            <h1 class="text-uppercase text-center text-black contact-title">Contact Me</h1>
            <hr class="store-header-line" />
            <h1 class="text-uppercase text-center text-black cart-title-long mb-5">Didn't see what you were looking for in the <Link to='/FAQ'>FAQs</Link> Page?</h1>
            
            <div class="container contact-form">
                <div class="row">
                    <div class="col-md-6">
                        <img src="images/paperplane.png" alt="paper-plane" class="w-100 p-3" />
                    </div>
                   
                    <div class="col-md-6">
                        <form method="post" onSubmit={submitRequest}>      
                            <div class="form-group">
                                <input type="text" name="Name" class="form-control" placeholder="Your Name" onChange={e => setName(e.target.value)} />
                            </div>
                            
                            <div class="form-group">
                                <input type="email" name="Email" class="form-control" placeholder="Your Email" onChange={e => setEmail(e.target.value)} />
                            </div>
                        
                            <div class="form-group">
                                <textarea name="Message" class="form-control message-body" placeholder="Your Message *" onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                            
                            <div class="form-group">
                                <button disabled={processing || succeeded} id="submit" class="btn btn-primary w-25" type="submit"><span id="button-text"> 
                                {processing ? (
                                <div class="spinner-border text-light" role="status"></div>
                                ) : (
                                    "Send"
                                    )}
                                </span></button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;