import './CategoryArea.css';
import Card from '../Card/Card';
import icon from '../Data/iconOrder.png';

function CategoryArea(props) {
    return (
        <div className="card-container">
            <Card icon={icon} type="category" name="Order" />
            <Card icon={icon} type="category" name="Donation" />
            <Card icon={icon} type="category" name="Contact" />
            <Card icon={icon} type="category" name="Signup" />
            <Card icon={icon} type="category" name="Inspection" />
        </div>
    );
}

export default CategoryArea;