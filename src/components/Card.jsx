import './Card.css';

function Card({props}) {
    return(
        <div className="card">
                <img src={props.img} alt="" />
            <a href={props.page}>Ver</a>
            {/* <div><a href="/">Ver</a></div> */}
        </div>
    )
}

export default Card;