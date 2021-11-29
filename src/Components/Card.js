// a couple of functions from the React library
import React from 'react';

const Card = ({cardProp}, {indexProp})=>{

    // function refreshPage() {
    //     window.location.reload(false);
    // }

    return(
        <div className="card" key={cardProp} id="index-'${i}">
            <div className="cardTitle">
                {/* This will be a component that recieves input via props */}
                <h2>Custom Title</h2> 
                <div class="cardOptions">
                    <i class="far fa-edit"></i>E
                    <i class="far fa-copy"></i>C
                    <i class="far fa-trash-alt"></i>D
                </div>
            </div>
            <div className="cardBody">
                {/* This will be a component that recieves input via props */}
                <p>Custom Body Text</p>
            </div>

        </div>
    )
}



export default Card;