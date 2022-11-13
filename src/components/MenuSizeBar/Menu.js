import PropTypes from 'prop-types';
function Menu({ children }) {
    return <div>{children}</div>;
}
Menu.prototypes = {
    children: PropTypes.node.isRequired,
};
export default Menu;
