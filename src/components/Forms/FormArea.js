import Card from '../Card/Card';
import '../Category/CategoryArea.css';

function FormArea() {
    return (
        <div className="card-container">
            <Card name="Form 1" type="form" />
            <Card name="Form 2" type="form" />
        </div>
    );
}

export default FormArea;