import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import style from './style.module.css';
import { useState } from 'react';
function MenuItems({ icon, to, title, className, activeIcon }) {
    const [CheckActiveIcon, setNone] = useState(false);
    return (
        <div>
            <NavLink
                to={to}
                className={(value) => {
                    value.isActive ? setNone(true) : setNone(false);
                    return clsx(className, style.ItemsHover, { [style.active]: value.isActive });
                }}
            >
                <span className={clsx({ [style.None]: CheckActiveIcon })}>{icon}</span>
                <span className={clsx(style.None, { [style.Show]: CheckActiveIcon })}>{activeIcon}</span>
                <span className={style.Title}>{title}</span>
            </NavLink>
        </div>
    );
}
MenuItems.prototypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};
export default MenuItems;
