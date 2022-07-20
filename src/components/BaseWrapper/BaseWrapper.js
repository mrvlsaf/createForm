import { useNavigate } from 'react-router-dom';
import './BaseWrapper.css';
import navbarHome from '../Data/navbar-home.png';
import navbarNotific from '../Data/navbar-notific.png';
import navbarProfile from '../Data/navbar-profile-button.png';
import ContentHeadingSection from '../Content Heading Section/ContentHeadingSection';

function BaseWrapper(props) {

    const navigate = useNavigate();

    const navigateToCategory = () => {
        navigate('/');
    };

    const navigateToForms = () => {
        navigate('/forms');
    };

    return (
        <div className='outer-wrapper'>
            <div className='sidebar'>
                <div className='app-name'>createForm</div>
                <div className='inner-nav-container'>
                    <div className='navigation-heading'>Navigation</div>
                    <div onClick={navigateToCategory} style={{ backgroundColor: props.active === 'category' ? "#1d2834" : '#263544' }} className='nav-items'>Categories</div>
                    <div onClick={navigateToForms} style={{ backgroundColor: props.active === 'forms' ? "#1d2834" : '#263544' }} className='nav-items'>Forms</div>
                </div>
            </div>
            <div className='main-content-area'>
                <div className='navbar'>
                    <img src={navbarHome} alt="navbarHome" />
                    <img src={navbarNotific} alt="navbarNotifications" />
                    <img src={navbarProfile} alt="navbarProfile" />
                </div>
                {props.active === "category" ? (
                    <div className='category-content-area'>
                        <ContentHeadingSection
                            number="5"
                            type={props.active}
                        />
                    </div>
                ) : (
                    <div className='forms-content-area'>
                        <ContentHeadingSection
                            number="2"
                            type={props.active}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default BaseWrapper;