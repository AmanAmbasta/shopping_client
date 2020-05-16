import React from "react";

function Cards(props) {
    // console.log(props.data.productAttributes);
    
    return (
        <div className="item">
            <img src={props.data.productAttributes.imageUrls} alt="item" />
            <br />
               
            <h2>{props.data.productAttributes.title}</h2>

            <p>MRP: ₹ {props.data.Price.maximumRetailAmount}    <br/> 
            You Have to pay: ₹ {props.data.Price.sellingPriceAmount}
            
            </p>
            <button className="add-to-cart" type="button">Add to cart</button>
        </div>
    )
}
export default Cards;