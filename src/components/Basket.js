import React from 'react';

function Basket(props) {
    const {cartItem} = props;

    return (
        <div>
            <h1> Cart Item &#128722;</h1>
           <div>
               {cartItem.length === 0 && <div>Cart is empty</div>}
               {cartItem.map(item=>(
                   <div key={item.id}>
                       <div>{item.name}</div>
                       <button onClick={()=>props.handleClick(item)}>+</button>
                       <button  onClick={()=>props.handleMinus(item)}>-</button>
                       <div>{item.count} x {item.price * item.count}</div>
                   </div>
               ))}
           </div>
        </div>
    );
}

export default Basket;