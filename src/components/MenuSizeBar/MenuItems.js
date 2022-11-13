import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
function MenuItems({ icon, to, title }) {
    return (
        <div>
            <NavLink to={to}>
                {title}
                <span>{icon}</span>
            </NavLink>
        </div>
    );
}
MenuItems.prototypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default MenuItems;
