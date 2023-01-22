import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const DisplayOne = (props) => {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get( "http://localhost:8000/api/products/" + id )
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, [])

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
            </div>
        </div>
        </>
    )
};

export default DisplayOne;