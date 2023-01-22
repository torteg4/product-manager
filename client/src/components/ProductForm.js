import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {

    // const initialProduct ={
    //     title: "",
    //     price: "",
    //     description: ""
    // }
    // const [product, setProduct] = useState(initialProduct);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res); // always console log to get used to tracking your data!
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }

    return (
        <>
            <div>
                <h3>Product Manager</h3>
                <form onSubmit = {onSubmitHandler}>

                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        onChange={(e) => 
                            setTitle({...title, "title":e.target.value})}
                            />
                </div>

                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <input 
                        type="number" 
                        class="form-control" 
                        onChange={(e) => 
                            setPrice({...price, "price":e.target.value})}
                            />
                </div>

                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        onChange={(e) => 
                            setDescription({...description, "description":e.target.value})}
                            />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            
                </form>
            </div>
        </>
    )
}

export default ProductForm;