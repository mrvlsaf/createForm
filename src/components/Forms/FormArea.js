import Card from '../Card/Card';
import '../Category/CategoryArea.css';
import icon from '../Data/iconOrder.png';

function FormArea() {
    return (
        <div className="card-container">
            <Card name="Form 1" />
            <Card name="Form 2" />
        </div>
    );
}

export default FormArea;