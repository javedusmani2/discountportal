import { useState } from 'react';
import axios from 'axios';

export default function Admin() {
    const [discount, setDiscount] = useState({
        type: '',
        value: '',
        target: '',
        description: '',
        code: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDiscount((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/discounts', discount)
            .then(response => {
                alert('Discount created successfully');
            })
            .catch(error => {
                console.error('Error creating discount:', error);
            });
    };

    return (
        <div>
            <h2>Create Discount</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="type" placeholder="Type" value={discount.type} onChange={handleChange} />
                <input type="number" name="value" placeholder="Value" value={discount.value} onChange={handleChange} />
                <input type="text" name="target" placeholder="Target" value={discount.target} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={discount.description} onChange={handleChange} />
                <input type="text" name="code" placeholder="Code" value={discount.code} onChange={handleChange} />
                <button type="submit">Create Discount</button>
            </form>
        </div>
    );
}
