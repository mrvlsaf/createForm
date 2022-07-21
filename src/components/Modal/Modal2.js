import './Modal.css';
import iconOrder from '../Data/iconOrder.png';
import { useState } from 'react';

function Modal(props) {

    const [value, setValue] = useState('');
    const [mail, setMail] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const validateEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setMail(event.target.value);
    }

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    {props.type === "category" ? (
                        <h4 className="modal-title">View Category Details</h4>
                    ) : (
                        <h4 className="modal-title">Edit Form Details</h4>
                    )}
                </div>
                <div className="modal-body">
                    {props.type === "category" ? (
                        <form id='form-ss' className='category-form-body'>
                            <div>
                                Category Name: <span>Order</span>
                                <img src={iconOrder} alt="icon"/>
                            </div>
                            <div>Category Description: <span>soem random description about the category lets eseee lorem ipsum laorcm fc fjfv fffvdf</span></div>
                        </form>
                    ) : (
                        <div>
                            <form id='form-ss' className='form-body'>
                                <div>
                                    <input type="text" value="Devraj Singh" required name="name" placeholder="Full Name" />
                                    <input type="email" value="dsdevrajsingh55555@gmail.com" required name="email" placeholder='Email' onChange={validateEmail} />
                                    {error && <h4 style={{ color: 'red', position: 'absolute', right: 490, top:170 }}>{error}</h4>}
                                </div>
                                <div>
                                    <input type="number" value="8860354705" required name="aadhar" placeholder='Aadhar Number' />
                                    <input type="number" value="8860354705" required name="phoneNumber" placeholder='Phone Number' />
                                </div>
                                <textarea value="lorem ipsum sajndfsj fdf gf dgdgfdgdgdf ggffds gf fg f fg gf fggffggffg gfgfgffggg ggfgfggg d." placeholder='Description (optional)' rows="4" />
                                <div>
                                    <input type="text" value="Form-1" required name="formName" placeholder='Form ID' />
                                    <label required>
                                        Select form category
                                        <select required value={value} onChange={handleChange}>
                                            <option value="Signup">Signup</option>
                                            <option value="Donation">Donation</option>
                                            <option value="Contact">Contact</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className="modal-footer">
                    {props.type === "form" && <button className="buttonCreate" type='submit' form='form-ss'>Update</button>}
                    <button className="buttonClose" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;