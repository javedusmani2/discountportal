import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product({ product }) {
    const [discount, setDiscount] = useState(null);

    useEffect(() => {
        axios.post('http://localhost:5000/api/discounts/apply', { code: 'coupon2', target: 'product' })
            .then(response => {
                setDiscount(response.data);
            });
    }, []);

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            {discount && <p>Discount: {discount.value}% off</p>}
            <p>{product.description}</p>
        </div>
    );
}
