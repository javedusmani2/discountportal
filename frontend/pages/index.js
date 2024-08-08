import Product from '../components/Product';

const product = {
    name: 'Sample Product',
    price: 100,
    description: 'This is a sample product.',
};

export default function Home() {
    return (
        <div>
            <h1>Product Page</h1>
            <Product product={product} />
        </div>
    );
}
