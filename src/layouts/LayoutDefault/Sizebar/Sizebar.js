import style from './SizeBar.module.css';
import clsx from 'clsx';
import Menu, { MenuItems } from '~/components/MenuSizeBar';
import Config from '~/routes/Routes';
function SizeBar() {
    return (
        <div className={clsx(style.container)}>
            <Menu>
                <MenuItems to={'/'} title={'For you'} icon={null} />
                <MenuItems to={Config.Routes.Following} title={'Flowing'} icon={null} />
                <MenuItems to={Config.Routes.Live} title={'Live'} icon={null} />
            </Menu>
        </div>
    );
}

export default SizeBar;
