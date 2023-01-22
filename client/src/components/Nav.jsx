import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div>
                <Link to={"/products/create"}>Add Product</Link>
            </div>

            <div>
                <Link to={"/products"}>Dispaly All Products</Link>
            </div>
        </>
    )
};

export default Nav;