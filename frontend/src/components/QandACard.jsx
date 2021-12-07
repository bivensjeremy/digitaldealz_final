import React from 'react';

function QandACard(props){
    return(
        <div>
            <h4 class="question">{props.question}</h4>
            <p class="answer mb-4">{props.answer}</p>
            <hr />
        </div> 
    )
}

export default QandACard