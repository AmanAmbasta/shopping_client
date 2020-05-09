import React from 'react';
import Cards from './cards';
import './style.css';
let info = [];
let card_Component;
const Product_url = "http://localhost:5000/product/all";
function ShowAll() {
    let isLoading = true;

    fetch(Product_url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            isLoading = false;
            info = data.data;
            console.log(info);

            let card_Component = info.map(data => {
            console.log(data);
            return (<Cards
                key={data._id}
                productId={data.productBaseInfo.productId}
                category={data.productBaseInfo.category}
                title={data.productAttributes.title}
                productBrand={data.productAttributes.productBrand}
                productDescription={data.productAttributes.productDescription}
                imageUrls={data.productAttributes.imageUrls}
                maximumRetailAmount={data.Price.maximumRetailAmount}
                sellingPriceAmount={data.Price.sellingPriceAmount}
                discountPercentage={data.Price.discountPercentage}
                currency={data.Price.currency} />)
        })
            
        });
        
    return (
        <div className="wrapper">
            <div className="items">
                {card_Component}
            </div>
        </div>
    )
}
export default ShowAll;