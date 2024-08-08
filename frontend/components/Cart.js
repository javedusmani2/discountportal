import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart({ cartItems }) {
    const [discount, setDiscount] = useState(null);

    const applyDiscount = (code) => {
        axios.post('http://localhost:5000/api/discounts/apply', { code, target: 'cart' })
            .then(response => {
                setDiscount(response.data);
            });
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const discountedTotal = discount ? total * (1 - discount.value / 100) : total;

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <p>Total: ${discountedTotal.toFixed(2)}</p>
            {discount && <p>Discount: {discount.value}% off</p>}
            <input type="text" placeholder="Discount code" onBlur={(e) => applyDiscount(e.target.value)} />
        </div>
    );
}
