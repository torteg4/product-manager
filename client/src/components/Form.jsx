import React, { useState } from 'react'
import axios from 'axios';

const Form = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newProduct = {
            title,
            price,
            description,
        }

        axios.post('http://localhost:8000/api/products', newProduct)
        .then( () => console.log("Creation on backend successful"))
        // console.log(res.data);// always console log to get used to tracking your data
        .catch( (err) => console.log(err));
    }

    return (
        
            <div className= "container">
                <h3>Product Manager</h3>
                <form onSubmit = { onSubmitHandler }>

                <div class="mb-3">
                    <label>Title</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <input 
                        type="number" 
                        step="0.01"
                        class="form-control" 
                        onChange={(e) => setPrice(e.target.value)}
                            />
                </div>

                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button class="btn btn-primary">Submit</button>
            
                </form>
            </div>
        
    )
}

export default Form;