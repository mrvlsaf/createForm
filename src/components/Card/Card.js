import './Card.css';
import { useState } from 'react';
import Modal2 from '../Modal/Modal2';

function Card(props) {
    const [show, setShow] = useState(false)

    return (
        <div className='card-body' onClick={() => setShow(true)}>
            <Modal2 onClose={() => setShow(false)} show={show} type={props.type} />
            {props.icon && (<img src={props.icon} alt="icon" />)}
            <span>{props.name}</span>
        </div>
    );
}

export default Card;