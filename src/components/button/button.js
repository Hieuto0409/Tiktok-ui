import style from './button.module.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ to, href, primary, noBorder, title, outline, onClick, className, disable, children, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // remove event when disable true
    if (disable) {
        Object.keys(props).forEach((propsKey) => {
            if (propsKey.startsWith('on') && typeof props[propsKey] === 'function') {
                delete props[propsKey];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = clsx(style.wrapper, {
        [className]: className,
        [style.primary]: primary,
        [style.noBorder]: noBorder,
        [style.title]: title,
        [style.outline]: outline,
        [style.disable]: disable,
    });
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    noBorder: PropTypes.bool,
    title: PropTypes.bool,
    outline: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disable: PropTypes.bool,
};

export default Button;
