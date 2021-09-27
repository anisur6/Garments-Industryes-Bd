import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    let companyName = [];
    let total = 0;
    for (const company of props.cart) {
        total = total + company.Shares;
        companyName.push(company.name);
    }

    return (
        <div>
            <div>
                <h3 className="cart-header">Companys Total Share Amount</h3>
                <h4>Items : {props.cart.length}</h4>
                <h3>Total Amount : {total}</h3>
            </div>

            <div className="name">
                {
                    companyName.map(singleName => (<h3 key={singleName}>*{singleName}</h3>))
                }
            </div>
        </div>


    );
};

export default Cart;