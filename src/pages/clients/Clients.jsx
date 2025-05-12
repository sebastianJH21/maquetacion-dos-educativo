import Card from "../../components/Card";
import './Clients.css';
function Clients() {
    return (
        <section className="clients">
            <Card props={{ img: './public/background.png', page: '/clients' }} />
            <Card props={{ img: './public/background.png', page: '/clients' }} />
            <Card props={{ img: './public/background.png', page: '/clients' }} />
            <Card props={{ img: './public/background.png', page: '/clients' }} />
            <Card props={{ img: './public/background.png', page: '/clients' }} />
            <Card props={{ img: './public/background.png', page: '/clients' }} />
            <a href="/">Home</a>
        </section>
    )
}

export default Clients;