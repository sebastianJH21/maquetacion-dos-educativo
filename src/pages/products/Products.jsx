import Card from "../../components/Card";
import './Products.css';
function Products() {
    return (
        <section className="products">
            <Card props={{ img: './public/background.png', page: '/product' }} />
            <Card props={{ img: './public/background.png', page: '/product' }} />
            <Card props={{ img: './public/background.png', page: '/product' }} />
            <Card props={{ img: './public/background.png', page: '/product' }} />
            <Card props={{ img: './public/background.png', page: '/product' }} />
            <Card props={{ img: './public/background.png', page: '/product' }} />
            <a href="/search-products">Home</a>
        </section>
    )
}

export default Products;