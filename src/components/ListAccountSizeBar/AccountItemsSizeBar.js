import { Link } from 'react-router-dom';
import style from './style.module.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types';
function AccountItemsSizeBar({ UserName, NickName, ImgSrc }) {
    return (
        <Link to={NickName}>
            <div className={clsx(style.ItemsContainer)}>
                <div>
                    <img className={style.imgUser} src={ImgSrc} alt="avatarUser" />
                </div>
                <div className={style.InformationUser}>
                    <h3 className={style.UserName}>
                        {UserName}{' '}
                        <span>
                            <FontAwesomeIcon icon={faCheckCircle} className={style.iconCheck} />
                        </span>
                    </h3>
                    <p className={style.UserNickName}>{NickName}</p>
                </div>
            </div>
        </Link>
    );
}
AccountItemsSizeBar.propTypes = {
    UserName: PropTypes.string.isRequired,
    NickName: PropTypes.string.isRequired,
    ImgSrc: PropTypes.string.isRequired,
};
export default AccountItemsSizeBar;
