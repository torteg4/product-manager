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



    return (
        <div>
            <h3>All Products:</h3>
            {productList.length > 0 && productList.map((product,index) => (
                <>
                <Link to = {'/products/' + product._id}>
                    <h5>{product.title}</h5>
                </Link> 
                </>
            )
            )}

        </div>
    );
};

export default DisplayList;
