import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DisplayList = (props) => {

    const [productList, setProductList] = useState([]);
    const [filterType, setFilterType] = useState("");


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


    const onSelectSort = (e) => {
        setFilterType(e.target.value) 
        // const copyArray = [...sortType]
        // console.log(type)

        // const sortedArray = productList.filter ( (product,i) => {
        //     // console.log(product.type)
        //     // console.log(i)
        //     return type === product.type;
        //         // console.log(product)
        //         // setSortType(sortType => [...sortType, product])
        //         // console.log(sortType)
        //         // return sortType;
            
        // })
        // return sortedArray;
    }

    // ? Pseudo code: If type = "dog", filter for all types with "dog" else return 0
    // define what we want to find
    // first grab items
    // map items
    // go through each item and check for user input
    // return items that match user input - new array



    return (
        <div>
        <>
            <h3>Products Available:</h3>
            
            <div>                      
                <select value={filterType} onChange={ onSelectSort }>             
                        <option value="">Unfiltered</option>
                        <option value="dog">Dogs</option>
                        <option value="cat">Cats</option>
                        <option value="pokemon">Pokemon</option>
                        <option value="bird">Birds</option>
                        <option value="rabbit">Rabbits</option>
                        <option value="other">Other</option>
                </select>
                
            </div>

            <div className="d-flex flex-column p-2">
                {productList.length > 0 && productList.filter ( (product,i) => {
                    
                return filterType === product.type || filterType === ""}).map(product => {
                        return (
                            <>
                            <div className="border border-dark m-3">
                                <Link to = {'/products/' + product._id}>
                                    <h5>{product.title}</h5>
                                </Link> 
                                <p>Price: ${product.price.toFixed(2)}</p>
                                <p>Type: {product.type}</p>

                                <button 
                                    onClick={() => deleteProduct(product._id)}
                                    className="btn btn-warning margin-bottom-10px">
                                        Delete
                                </button>
                            </div>
                            </>
                        )
                })}
            </div>


        </>
        </div>
    );
};

export default DisplayList;

            // <div className="d-flex flex-column p-2">
            //     {productList.length > 0 && productList.map((product,index) => (
            //         <>
            //         <div className="border border-dark m-3">
            //             <Link to = {'/products/' + product._id}>
            //                 <h5>{product.title}</h5>
            //             </Link> 
            //             <p>Price: ${product.price.toFixed(2)}</p>
            //             <p>Type: {product.type}</p>

            //             <button 
            //                 onClick={() => deleteProduct(product._id)}
            //                 className="btn btn-warning margin-bottom-10px">
            //                     Delete
            //             </button>
            //         </div>
            //         </>
            //     ))}
            // </div>