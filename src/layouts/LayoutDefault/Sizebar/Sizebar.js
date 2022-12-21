import { LiveIcon, LiveIconActive, FlowingIcon, FlowingIconActive, HomeIcon, HomeIconActive } from '~/components/icon';
import clsx from 'clsx';

import style from './SizeBar.module.css';
import Menu, { MenuItems } from '~/components/MenuSizeBar';
import Config from '~/routes/Routes';
import ListAccountSizeBar from '~/components/ListAccountSizeBar';
function SizeBar() {
    // đang active icon
    return (
        <div className={clsx(style.container)}>
            <Menu>
                <MenuItems
                    className={clsx(style.Menuitems)}
                    to={'/'}
                    title={'For you'}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                />
                <MenuItems
                    className={clsx(style.Menuitems)}
                    to={Config.Routes.Following}
                    title={'Flowing'}
                    icon={<FlowingIcon />}
                    activeIcon={<FlowingIconActive />}
                />
                <MenuItems
                    className={clsx(style.Menuitems)}
                    to={Config.Routes.Live}
                    title={'Live'}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                />
                <div className={style.border}></div>
            </Menu>
            <ListAccountSizeBar label="Suggested accounts" />
            <ListAccountSizeBar label="Following accounts" />
        </div>
    );
}

export default SizeBar;
