import React, { Component } from 'react';
const postUrl = "http://localhost:5000/product/add";
class AddNew extends Component {
    constructor() {
        super();
        this.state = {
            productId: "",
            category: "",
            title: "",
            productBrand: "",
            productDescription: "",
            imageUrls: "",
            maximumRetailAmount: 0,
            sellingPriceAmount: 0,
            discountPercentage: 0,
            currency: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.productId === "" || this.state.title === "") {
            alert("Hey Complet the Form Please 🤯 🤯 🤯");

        }
        else {
            const data = {
                productBaseInfo: {
                    productId: this.state.productId,
                    category: this.state.category
                },
                productAttributes: {
                    title: this.state.title,
                    productBrand: this.state.productBrand,
                    productDescription: this.state.productDescription,
                    imageUrls: this.state.imageUrls
                },
                Price: {
                    maximumRetailAmount: this.state.maximumRetailAmount,
                    sellingPriceAmount: this.state.sellingPriceAmount,
                    discountPercentage: this.state.discountPercentage,
                    currency: this.state.currency
                }
            }            
            fetch(postUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert(data.message)
        })
                .catch(err=>{
                    console.log(err);
                    alert("OPPS ☹ ☹ ☹ Something went Wrong😱 😱 😱  ")});
        }
    }

    render() {
        return (
            <div className='Add-New'>
                <form onSubmit={this.handleSubmit}>
                    <h4>Product Base Info</h4>
                    Product Id :<input
                        type="text"
                        name="productId"
                        placeholder="productId"
                        value={this.state.productId}
                        onChange={this.handleChange}
                    /> Category: <input
                        type="text"
                        name="category"
                        placeholder="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                    />
                    <br />
                    <h4>Product Attributes</h4>
                    Title:<input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    /> Product Brand <input
                        type="text"
                        name="productBrand"
                        placeholder="productBrand"
                        value={this.state.productBrand}
                        onChange={this.handleChange}
                    />
                    <br />
                    Product Description<br />
                    <textarea
                        type="text"
                        name="productDescription"
                        rows='15'
                        cols='75'
                        placeholder="Start typing..."
                        value={this.state.productDescription}
                        onChange={this.handleChange}></textarea>
                    <br />
                    Image Urls:<input
                        type="text"
                        name="imageUrls"
                        placeholder="imageUrls"
                        value={this.state.imageUrls}
                        onChange={this.handleChange}
                    />
                    <br />
                    <h4>Price</h4>
                    maximumRetailAmount:<input
                        type="text"
                        name="maximumRetailAmount"
                        placeholder="maximumRetailAmount"
                        value={this.state.maximumRetailAmount}
                        onChange={this.handleChange}
                    />
                sellingPriceAmount:<input
                        type="text"
                        name="sellingPriceAmount"
                        placeholder="sellingPriceAmount"
                        value={this.state.sellingPriceAmount}
                        onChange={this.handleChange}
                    />
                currency: <input
                        type="text"
                        name="currency"
                        placeholder="currency"
                        value={this.state.currency}
                        onChange={this.handleChange}
                    /><br />
                discountPercentage:<input
                        type="text"
                        name="discountPercentage"
                        placeholder="discountPercentage"
                        value={this.state.discountPercentage}
                        onChange={this.handleChange}
                    /><br />
                    <button>Submit</button>
                </form>
                <hr />
            </div>
        )
    }
}
export default AddNew;