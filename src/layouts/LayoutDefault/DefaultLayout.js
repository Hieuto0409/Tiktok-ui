import Header from './Header';
import SizeBar from './Sizebar';
import style from './LayoutDefault.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={clsx(style.container)}>
                <div className={clsx(style.containerContent)}>
                    <SizeBar />
                    <div className={clsx(style.content)}>{children}</div>
                </div>
            </div>
        </div>
    );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
