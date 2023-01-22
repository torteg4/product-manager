import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisplayOne = (props) => {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get( "http://localhost:8000/api/products/" + id )
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container">
            <div className="border border-dark p-3">
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <span>Description: {product.description}</span>
            </div>
        </div>
    )
};

export default DisplayOne;