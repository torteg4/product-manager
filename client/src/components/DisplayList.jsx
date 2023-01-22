import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayList = (props) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            // .then((res) => console.log(res.data))
            .then((res) => setProductList(res.data))
            .catch((err) => console.log(err))
    }, []);

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(() => {
                console.log("Successfully deleted from the backend")
                removeFromDom(productId)
            })
            .catch (err => console.log("Something went wrong when deleting product on displayList", err))
    };

    const removeFromDom = (productId) => {
        setProductList(productList.filter( p => p._id !== productId))
    }



    return (
        <div>
            <h3>Products Available:</h3>
            {productList.length > 0 && productList.map((product,index) => (
                <>
                <Link to = {'/products/' + product._id}>
                    <h5>{product.title}</h5>
                </Link> 

                <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </>
            )
            )}

        </div>
    );
};

export default DisplayList;
