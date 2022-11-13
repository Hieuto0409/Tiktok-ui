import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Menu.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function HeaderMenu({ title, onBack }) {
    return (
        <div className={clsx(style.container, style.HeaderText)}>
            <button className={clsx(style.onBack)} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className={style.HeaderTitle}>{title}</span>
        </div>
    );
}
HeaderMenu.prototype = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};
export default HeaderMenu;
