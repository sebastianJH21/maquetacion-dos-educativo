import Card from "../../components/Card";
import './Clients.css';
function Clients() {
    return (
        <section className="clients">
            <Card props={{ img: './public/img/clients/univercityOne.png', page: '/client' }} />
            <Card props={{ img: './public/img/clients/univercityTwo.png', page: '/client' }} />
            <Card props={{ img: './public/img/clients/univercityThree.jpg', page: '/client' }} />
            <Card props={{ img: './public/img/clients/univercityFour.webp', page: '/client' }} />
            <Card props={{ img: './public/img/clients/univercityFive.jpg', page: '/client' }} />
            <Card props={{ img: './public/img/clients/univercitySix.avif', page: '/client' }} />
            <a href="/">Home</a>
        </section>
    )
}

export default Clients;