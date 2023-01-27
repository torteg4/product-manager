import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newProduct = {
            title,
            price,
            type,
            description,
        }

        axios.post('http://localhost:8000/api/products', newProduct)
        .then(() => {
            console.log("Creation on backend successful")
            navigate("/products")
        })
        // console.log(res.data);// always console log to get used to tracking your data
        .catch((err) => {
            const errorResponse = err.response.data.errors;
            console.log(err.response.data.errors)

            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log(err) 
        })
    };


    return (
        
            <div className= "container">

                <h3>Product Manager</h3>
                <h5>Add a Product</h5>
                <form onSubmit = { onSubmitHandler }>

                    {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}

                    <div class="mb-3">
                        <label>Title: </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Price:</label>
                        <input 
                            type="number" 
                            step="0.01"
                            class="form-control" 
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <label class="form-label">Type: </label>
                        <select onChange={(e) => setType(e.target.value)}>

                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="pokemon">Pokemon</option>
                            <option value="bird">Bird</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* <div class="mb-3">
                        <label class="form-label">Type (dog, cat, pokemon, bird, rabbit, other):</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            onChange={(e) => setType(e.target.value)}
                            />
                    </div> */}

                    <div class="mb-3">
                        <label class="form-label">Description:</label>
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