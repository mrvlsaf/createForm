import './ContentHeadingSection.css';
import addButton from '../Data/add.png';
import dropdownButton from '../Data/dropdown.png';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import CategoryArea from '../Category/CategoryArea';
import FormArea from '../Forms/FormArea';

function ContentHeadingSection(props) {
    const [show, setShow] = useState(false)

    return (
        <div className='outer-container'>
            <div className='inner-container-1'>
                <div className='inner-container-1-1'>
                    <img src={addButton} alt="addButton" onClick={() => setShow(true)} />
                    <Modal onClose={() => setShow(false)} show={show} />
                    <span>{props.number}</span>{props.type === 'category' ? <span>Categories</span> : <span>Forms</span>}
                </div>
                <div className='inner-container-1-1'>
                    <span>Sort by</span>
                    <span><img src={dropdownButton} alt="dropdown Button" /></span>
                </div>
            </div>
            <div className='inner-container-2'>
                {props.type === 'category' ? <CategoryArea /> : <FormArea />}
            </div>
        </div>
    );
}

export default ContentHeadingSection;