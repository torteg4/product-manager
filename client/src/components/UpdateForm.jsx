import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';


const UpdateForm = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    useEffect (() => {    
    axios.get('http://localhost:8000/api/products/' + id)
    // console.log(res.data)// always console log to get used to tracking your data
        .then( (res) => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setType(res.data.type)
            setDescription(res.data.description)
        })
        .catch( (err) => console.log("Something went wrong with updating", err));
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const updatedProduct = {
            title,
            price,
            type,
            description,
        }

        axios.put('http://localhost:8000/api/products/' + id, updatedProduct)
        .then( () => {
            console.log("Update on backend successful");
            navigate("/products");
        })
        // console.log(res.data);// always console log to get used to tracking your data
        .catch( (err) =>  {
            const errorResponse = err.response.data.errors;

            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        });
    }

    return (
        
            <div className= "container">
                <h3>Update Product</h3>
                <form onSubmit = { onSubmitHandler }>

                {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}

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

                <div>
                        <label class="form-label">Type: </label>
                        <select 
                            onChange={(e) => setType(e.target.value)}
                            value={type}>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="pokemon">Pokemon</option>
                                <option value="bird">Bird</option>
                                <option value="rabbit">Rabbit</option>
                                <option value="other">Other</option>
                        </select>
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