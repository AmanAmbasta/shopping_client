import React from "react";

function Cards(props) {
    return (
        <div className="item">
            <img src="one.jpg" alt="item" />
            <br />
            <h2>ITEM 1</h2>

            <p>PRICE: $449
            </p>
            <button className="add-to-cart" type="button">Add to cart</button>
        </div>
    )
}
export default Cards;