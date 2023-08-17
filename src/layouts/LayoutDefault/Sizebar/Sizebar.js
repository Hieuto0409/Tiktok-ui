import { LiveIcon, LiveIconActive, FlowingIcon, FlowingIconActive, HomeIcon, HomeIconActive } from '~/components/icon';
import clsx from 'clsx';

import style from './SizeBar.module.css';
import Menu, { MenuItems } from '~/components/MenuSizeBar';
import Config from '~/routes/Routes';
import ListAccountSizeBar from '~/components/ListAccountSizeBar';
import ListDiscover from '~/components/Discover';
import IntroduceItems from '~/components/Introduce';

function SizeBar() {
    return (
        <div className={clsx(style.container)}>
            <div className={clsx(style.ContainerItems)}>
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
            <div className={clsx(style.ContainerItems)}>
                <ListAccountSizeBar label="Suggested accounts" />
            </div>
            <div className={clsx(style.ContainerItems)}>
                <ListAccountSizeBar label="Following accounts" />
            </div>
            <div className={clsx(style.ContainerItems)}>
                <ListDiscover label="Discover" />
            </div>
            <div className={clsx(style.ContainerItems)}>
                <IntroduceItems />
            </div>
        </div>
    );
}

export default SizeBar;
