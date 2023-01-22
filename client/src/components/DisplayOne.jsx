import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const DisplayOne = (props) => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get( "http://localhost:8000/api/products/" + id )
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(() => {
                console.log("Successfully deleted from the backend")
                navigate("/products");
                // removeFromDom(productId)
            })
            .catch (err => console.log("Something went wrong when deleting product on displayList", err))
    };


    return (
        <>
        <div className="container border border-dark p-3">
            <div>
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <span>Description: {product.description}</span>
            </div>

            <div>
                <Link to={"/products/update/" + product._id}> Update </Link>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
        </div>
        </>
    )
};

export default DisplayOne;