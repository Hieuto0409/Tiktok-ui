import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import style from './Menu.module.css';
import { Wrapper } from '~/components/poper';
import MenuItems from './Menuitem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

function Menu({ children, items = [], hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);

    let current = history[history.length - 1];
    const MenuItem = () => {
        return current.data.map((content, item) => {
            const Parents = !!content.children;
            return (
                <MenuItems
                    key={item}
                    object={content}
                    onClick={() => {
                        if (Parents) {
                            setHistory((prev) => [...prev, content.children]);
                        }
                    }}
                />
            );
        });
    };
    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const reBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    return (
        <div className={style.TippyContainer}>
            <Tippy
                delay={[0, 500]}
                interactive
                // visible
                hideOnClick={hideOnClick}
                placement="bottom-end"
                onHide={handleResetToFirstPage}
                render={(attrs) => (
                    <div className={clsx(style.MenuContent)} tabIndex="-1" {...attrs}>
                        <Wrapper className={style.popper}>
                            <div>
                                <div>{history.length > 1 && <HeaderMenu title={current.title} onBack={reBack} />}</div>
                                <div>{MenuItem()}</div>
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}
Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
};

export default Menu;
