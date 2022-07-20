import './Card.css';

function Card(props) {
    return (
        <div className='card-body'>
            {props.icon && (<img src={props.icon} alt="icon" />)}
            <span>{props.name}</span>
        </div>
    );
}

export default Card;