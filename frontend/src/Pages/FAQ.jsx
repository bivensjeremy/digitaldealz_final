import React from 'react';
import {Link} from 'react-router-dom';
import QandACard from '../components/QandACard'
import questions from '../questions';

function createCard(questions){
    return(
       <QandACard
            question={questions.question}
            answer={questions.answer}
        />  
    )  
};

function FAQ(){
    return (
        <div>
            <h1 class="text-uppercase text-center text-black faq-title">FAQ</h1>
            <hr class="store-header-line" />
            <h1 class="text-uppercase text-center text-black cart-title-long mb-5">Frequently Asked Questions</h1>

            <div class="container">
                <section class="faq-container bg-dark">
                    <div class="faqs">
                    {questions.map(createCard)}

                    <button class="btn btn-light mx-auto"><Link to='/Store' class="nav-link">Take me to the Store!</Link></button>
                    
                    </div> 

                    
                </section>
            </div>
        </div> 
    );
};

export default FAQ;