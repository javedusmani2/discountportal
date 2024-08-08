import Cart from '../components/Cart';

const cartItems = [
    { name: 'Sample Product 1', price: 50 },
    { name: 'Sample Product 2', price: 75 },
];

export default function CartPage() {
    return (
        <div>
            <h1>Cart Page</h1>
            <Cart cartItems={cartItems} />
        </div>
    );
}
