import Card from "../../components/Card";
import './Products.css';
function Products() {
    return (
        <section className="products">
            <Card props={{ img: './public/img/products/productOne.jpg', page: '/product' }} />
            <Card props={{ img: './public/img/products/productTwo.jpg', page: '/product' }} />
            <Card props={{ img: './public/img/products/productThree.jpeg', page: '/product' }} />
            <Card props={{ img: './public/img/products/productFour.avif', page: '/product' }} />
            <Card props={{ img: './public/img/products/productFive.webp', page: '/product' }} />
            <Card props={{ img: './public/img/products/productSix.png', page: '/product' }} />
            <a href="/search-products">Home</a>
        </section>
    )
}

export default Products;