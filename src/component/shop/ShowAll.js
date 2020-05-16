import React, { Component } from 'react';
import Cards from './cards';
import './style.css';

const Product_url = "http://localhost:5000/product/all";
class ShowAll extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(Product_url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(itemsData => {
                let keyid = 0;
                this.setState({
                    items: itemsData.data.map((data) => ({
                        itemData: data,
                        id: keyid++
                    })),
                    isLoading: false
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let content = <p>Loading characters...</p>;

        if (!this.state.isLoading && this.state.items.length > 0) {
            content = (
            this.state.items.map(char => {
                // {console.log(char.itemData.productAttributes);}
                return <Cards key={char.id}  data = {char.itemData}/>
            })
            );
        }
         return (
                <div className="wrapper">
                    <div className="items">
                        {content}
                    </div>
                </div>
            )
    
    }
}
export default ShowAll;
        // return (
        //     <div className="wrapper">
        //         <div className="items">
        //             {dataState.loading ? <h1>is Loading</h1> : card_Component}
        //             {/* <Cards key={dataState.info._id} productId={dataState.info} />         */}
        //             card_Component is Loading
        //         </div>
        //     </div>
        // )
