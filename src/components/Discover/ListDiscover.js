import DiscoverButton from './DiscoverButton';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { IconX, IconMusic } from '../icon';
function ListDiscover({ label }) {
    return (
        <div className={style.Container}>
            <div>
                <p className={style.Label}>{label}</p>
            </div>
            <div className={style.listButton}>
                <DiscoverButton icon={<IconX />} title={'Hiếu'} />
                <DiscoverButton icon={<IconX />} title={'Hiếu'} />
                <DiscoverButton
                    icon={<IconX />}
                    title={'fgdfgdfgdsfgdfgdsfgdfgdfgssssssssssssssssssssssssfgdsfsdfdsfsdfsdfsdfsdfssss'}
                />
                <DiscoverButton icon={<IconMusic />} title={'Hiếu'} />
                <DiscoverButton icon={<IconX />} title={'Hiếu'} />
                <DiscoverButton icon={<IconMusic />} title={'fggfsdgdfgdfgdfgdfg'} />
                <DiscoverButton icon={<IconX />} title={'Hiếu'} />
                <DiscoverButton icon={<IconMusic />} title={'Hiếu'} />
            </div>
        </div>
    );
}
ListDiscover.propTypes = {
    label: PropTypes.string.isRequired,
};
export default ListDiscover;
