import style from './poper.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function Wrapper({ children, className, onClick }) {
    return (
        <div className={clsx(style.wrapper, className)} onClick={onClick}>
            {children}
        </div>
    );
}
Wrapper.prototype = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default Wrapper;
