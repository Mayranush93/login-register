import React, {useState} from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";
import PRODUCTS from '../data/data';
import Basket from "../components/Basket";

function Users(props) {
    const {products} = PRODUCTS;
    // console.log(1, products)
    const [cartItem, setCartItem] = useState([]);
    console.log(cartItem)

    const handleClick = (products) => {//{id, nma, price}
        const exist = cartItem.find((x) => x.id === products.id);
        console.log(2, exist);
        if (!exist) {
            setCartItem([...cartItem, {...products, count: 1}])
        } else {
            setCartItem(cartItem.map(y => (
                y.id === products.id ? {...exist, count: exist.count + 1} : y
            )))
        }
    }

    const handleMinus = (products) => {
        const exist = cartItem.find((x) => x.id === products.id);
        if (exist.count === 1) {// 1 or 0
            setCartItem(cartItem.filter(z => z.id !== products.id))
        } else {
            setCartItem(cartItem.map(c => (
                c.id === products.id ? {...exist, count: exist.count - 1} : c
            )))
        }
    }
    return (
        <Wrapper>
            <div>
                <Link to={'/logout'}>Logout</Link>
                <Basket
                    handleClick={handleClick}
                    handleMinus={handleMinus}
                    cartItem={cartItem}/>
            </div>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => handleClick(product)}>Add Card</button>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}

export default Users;