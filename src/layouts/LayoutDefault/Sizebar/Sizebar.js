import style from './SizeBar.module.css';
import clsx from 'clsx';
import Menu, { MenuItems } from '~/components/MenuSizeBar';
import Config from '~/routes/Routes';
import { LiveIcon, LiveIconActive, FlowingIcon, FlowingIconActive, HomeIcon, HomeIconActive } from '~/components/icon';
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
            </Menu>
        </div>
    );
}

export default SizeBar;
