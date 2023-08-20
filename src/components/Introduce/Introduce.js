import PropTypes from 'prop-types';
import style from './style.module.css';
function Introduce({ label }) {
    return (
        <div>
            <a className={style.Items}>{label}</a>
        </div>
    );
}
Introduce.propTypes = {
    label: PropTypes.string.isRequired,
};
export default Introduce;
