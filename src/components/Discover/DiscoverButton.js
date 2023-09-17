import PropTypes from 'prop-types';
import Button from '../button/button';
import style from './style.module.css';
function DiscoverButton({ title, icon }) {
    return (
        <div className={style}>
            <Button title className={style.ButtonContainer}>
                <span className={style.Icon}>{icon} </span>
                <p className={style.ButtonContent}>{title}</p>
            </Button>
        </div>
    );
}
DiscoverButton.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default DiscoverButton;
