import style from './style.module.css';
import Button from '../button/button';

import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

function AccountItemsSizeBar({ UserName, NickName, ImgSrc, NumFl, NumLike }) {
    return (
        <Tippy
            render={(attrs) => (
                <div className={style.TippyContainer} tabIndex="-1" {...attrs}>
                    <div className={style.FlexButton}>
                        <img className={clsx(style.imgUser, style.Fs44px)} src={ImgSrc} alt="avatarUser" />
                        <Button primary>Follow</Button>
                    </div>
                    <div className={clsx(style.InformationUser, style.FixIn4User)}>
                        <h3 className={clsx(style.UserName, style.FixUserName)}>
                            {UserName}{' '}
                            <span>
                                <FontAwesomeIcon icon={faCheckCircle} className={style.iconCheck} />
                            </span>
                        </h3>
                        <p className={clsx(style.UserNickName, style.FixUserNickName)}>{NickName}</p>
                    </div>
                    <p className={style.In4Fl}>
                        <p className={style.StyleIn4Fl}>
                            <strong className={style.styleS}>{NumFl}</strong>{' '}
                            <span className={style.styleN}>Followers</span>
                        </p>
                        <p className={style.StyleIn4Fl}>
                            <strong className={style.styleS}>{NumLike}</strong>{' '}
                            <span className={style.styleN}>Likes</span>
                        </p>
                    </p>
                </div>
            )}
            interactive
            delay={[1000, 0]}
            placement="bottom-start"
        >
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
        </Tippy>
    );
}
AccountItemsSizeBar.propTypes = {
    UserName: PropTypes.string.isRequired,
    NickName: PropTypes.string.isRequired,
    ImgSrc: PropTypes.string.isRequired,
    NumFl: PropTypes.string.isRequired,
    NumLike: PropTypes.string.isRequired,
};
export default AccountItemsSizeBar;
