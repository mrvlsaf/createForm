import './Modal.css';
import attach from '../Data/attach.png';

function Modal(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Create New Category</h4>
                </div>
                <div className="modal-body">
                    <form className='form-body'>
                        <div>
                            <input type="file" accept="image/*" placeholder='Select an icon' style={{ display: 'none' }}
                                id="uploadFile" />
                            <label htmlFor="uploadFile">Select an icon<img src={attach} alt="attach" /></label>
                        </div>
                        <input type="text" name="name" placeholder='Enter category name' />
                        <textarea placeholder='Enter category description' rows="4" />
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="buttonCreate">Create</button>
                    <button className="buttonClose" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;