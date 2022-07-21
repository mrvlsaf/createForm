import './ContentHeadingSection.css';
import addButton from '../Data/add.png';
import { useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import CategoryArea from '../Category/CategoryArea';
import FormArea from '../Forms/FormArea';
import Card from '../Card/Card';
import icon from '../Data/iconOrder.png';

function ContentHeadingSection(props) {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState('');
    const [creatediv, setCreatediv] = useState(false);
    // const [data, setData] = useState(null);

    const data = [];
    const handleCallback = (childData) => {
        data[0] = childData.categoryName.value;
        data[1] = childData.categoryDescription.value;
        console.log(data[0]);
        setCreatediv(true);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className='outer-container'>
            <div className='inner-container-1'>
                <div className='inner-container-1-1'>
                    <img src={addButton} alt="addButton" onClick={() => setShow(true)} />
                    <Modal parentCallback={handleCallback} onClose={() => setShow(false)} show={show} type={props.type} />
                    <span>{props.number}</span>{props.type === 'category' ? <span>Categories</span> : <span>Forms</span>}
                </div>
                <div className='inner-container-1-1'>
                    <label required>
                        Filter by Category
                        <select required value={value} onChange={handleChange}>
                            <option value="Signup">Signup</option>
                            <option value="Donation">Donation</option>
                            <option value="Contact">Contact</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='inner-container-2'>
                {/* <div className='card-container'>
                    {creatediv && <Card icon={icon} type="category" name={data[0]} />}
                </div> */}
                {props.type === "category" ? <CategoryArea /> : <FormArea />}
            </div>
        </div>
    );
}

export default ContentHeadingSection;