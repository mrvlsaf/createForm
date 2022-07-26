import './Modal.css';
import attach from '../Data/attach.png';
import { useState } from 'react';

function Modal(props) {

    const [value, setValue] = useState('');
    const [mail, setMail] = useState('');
    const [error, setError] = useState(null);
    const [comp, setComp] = useState(false); 

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const categoryData = new FormData(event.target);
        props.parentCallback(event.target);
        // console.log(categoryData.get('categoryName'));
    }

    const validateEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setMail(event.target.value);
    }

    const createComponent = () => {
        setComp(true)

    }

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    {props.type === "category" ? (
                        <h4 className="modal-title">Create New Category</h4>
                    ) : (
                        <h4 className="modal-title">Create New Form</h4>
                    )}
                </div>
                <div className="modal-body">
                    {props.type === "category" ? (
                        <form id='form-ss' onSubmit={handleSubmit} className='category-form-body'>
                            <div>
                                <input type="file" accept="image/*" placeholder='Select an icon' style={{ display: 'none' }}
                                    id="uploadFile" />
                                <label htmlFor="uploadFile">Select an icon<img src={attach} alt="attach" /></label>
                            </div>
                            <input type="text" required name="categoryName" placeholder='Enter category name' />
                            <textarea required name="categoryDescription" placeholder='Enter category description' rows="4" />
                        </form>
                    ) : (
                        <div>
                            <form id='form-ss' className='form-body'>
                                <div>
                                    <input type="text" required name="name" placeholder="Full Name" />
                                    <input type="email" required name="email" placeholder='Email' onChange={validateEmail} />
                                    {error && <h4 style={{ color: 'red', position: 'absolute', right: 490, top:170 }}>{error}</h4>}
                                </div>
                                <div>
                                    <input type="number" required name="aadhar" placeholder='Aadhar Number' />
                                    <input type="number" required name="phoneNumber" placeholder='Phone Number' />
                                </div>
                                <textarea name="description" placeholder='Description (optional)' rows="4" />
                                <div>
                                    <input type="text" required name="formName" placeholder='Form ID' />
                                    <label required>
                                        Select form category
                                        <select required value={value} onChange={handleChange}>
                                            <option value="fruit">Signup</option>
                                            <option value="vegetable">Donation</option>
                                            <option value="meat">Contact</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className="modal-footer">
                    <button className="buttonCreate" type='submit' form='form-ss'>Create</button>
                    <button className="buttonClose" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;