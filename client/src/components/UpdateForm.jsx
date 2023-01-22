import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';


const UpdateForm = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect (() => {    
    axios.get('http://localhost:8000/api/products/' + id)
    // console.log(res.data)// always console log to get used to tracking your data
        .then( (res) => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch( (err) => console.log("Something went wrong with updating", err));
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const updatedProduct = {
            title,
            price,
            description,
        }

        axios.put('http://localhost:8000/api/products/' + id, updatedProduct)
        .then( () => console.log("Update on backend successful"))
        // console.log(res.data);// always console log to get used to tracking your data
        .catch( (err) => console.log(err));
    }

    return (
        
            <div className= "container">
                <h3>Update Product</h3>
                <form onSubmit = { onSubmitHandler }>

                <div class="mb-3">
                    <label>Title</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <input 
                        type="number" 
                        step="0.01"
                        class="form-control" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                            />
                </div>

                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <input 
                        type="text" 
                        class="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button class="btn btn-primary">Update</button>
            
                </form>
            </div>
        
    )
}

export default UpdateForm;