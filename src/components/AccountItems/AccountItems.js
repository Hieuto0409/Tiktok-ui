import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './account.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/img';

function AccountItems({ data }) {
    const userData = data.nickname;
    return (
        <a href={'@' + userData} className={clsx(style.account)}>
            <Image src={data.avatar} className={style.AvatarInfo} alt={data.last_name} />
            <div className={style.infoContainer}>
                <h3 className={style.info}>
                    {data.full_name}
                    {data.tick && (
                        <span className={style.iconCheck}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                    )}
                </h3>
                <p className={style.accountName}>{data.nickname}</p>
            </div>
        </a>
    );
}
AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItems;
