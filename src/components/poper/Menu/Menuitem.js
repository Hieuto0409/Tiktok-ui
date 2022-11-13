import clsx from 'clsx';
import Button from '~/components/button';
import style from './Menu.module.css';
import PropTypes from 'prop-types';

function MenuItems({ object, onClick }) {
    const ClassName = clsx(style.menuitem, {
        [style.separate]: object.separate,
    });
    return (
        <>
            <Button noBorder to={object.to} className={ClassName} onClick={onClick}>
                <span className={style.menuIcon}>{object.icon}</span>
                <span className={style.menuTitle}> {object.title}</span>
            </Button>
        </>
    );
}
MenuItems.prototype = {
    object: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;
