import PropTypes from 'prop-types';
import style from './style.module.css';
function Introduce({ label }) {
    console.log(label);
    return (
        <div>
            <p className={style.Items}>{label}</p>
        </div>
    );
}
Introduce.propTypes = {
    label: PropTypes.string.isRequired,
};
export default Introduce;
