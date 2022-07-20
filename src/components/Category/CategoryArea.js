import './CategoryArea.css';
import Card from '../Card/Card';
import icon from '../Data/iconOrder.png';

function CategoryArea() {
    return (
        <div className="card-container">
            <Card icon={icon} name="Order" />
            <Card icon={icon} name="Donation" />
            <Card icon={icon} name="Contact" />
            <Card icon={icon} name="Signup" />
            <Card icon={icon} name="Inspection" />
        </div>
    );
}

export default CategoryArea;