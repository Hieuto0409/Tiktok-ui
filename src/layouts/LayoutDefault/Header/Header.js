import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowRightToBracket,
    faCircleQuestion,
    faCoins,
    faGear,
    faLanguage,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoHeadlessTippy from '@tippyjs/react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/button';
import { InboxIcon, MessageIcon, EffectIcon } from '~/components/icon';
import Image from '~/components/img';
import Menu from '~/components/poper/Menu';
import Search from '../Search';
import Config from '~/routes/Routes';
import style from './Header.module.css';

function Header() {
    const CurrentUser = true;
    const MenuItems = [
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'Language',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        code: 'en',
                        title: 'English',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/FeedBack',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    const NewMenuItems = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/ViewProfile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/GetCoins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/Setting',
        },
        ...MenuItems,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '',
            separate: true,
        },
    ];
    return (
        <div className={clsx(style.container, style.HeaderStyle)}>
            <div className={clsx(style.contentContainer)}>
                <Link to={Config.Routes.Home} className={clsx(style.Logo)}>
                    <img
                        alt="24"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/800px-TikTok_logo.svg.png"
                        className={style.tiktokLogo}
                    />
                </Link>
                <>
                    <Search />
                </>
                <div className={style.ButtonContainer}>
                    <Button to="/upload">+ Upload</Button>
                    {CurrentUser ? (
                        <>
                            <NoHeadlessTippy content="Create Effects" delay={[0, 0]} placement="bottom-end">
                                <button className={style.LoginIcon}>
                                    <EffectIcon />
                                </button>
                            </NoHeadlessTippy>
                            <NoHeadlessTippy content="Message" delay={[0, 0]} placement="bottom-end">
                                <button className={style.LoginIcon}>
                                    <MessageIcon />
                                </button>
                            </NoHeadlessTippy>
                            <NoHeadlessTippy content="Inbox" delay={[0, 0]} placement="bottom-end">
                                <button className={style.LoginIcon}>
                                    <InboxIcon />
                                </button>
                            </NoHeadlessTippy>
                            <Menu items={NewMenuItems}>
                                <Image
                                    src={'https://i.pinimg.com/originals/b5/c0/19/b5c0191cbb9b7eed106de7230f960539.jpg'}
                                    alt="id-user"
                                    fallBack={
                                        'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/6/19/1058304/285844608_1238745030.jpg'
                                    }
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary to="/upload">
                                login
                            </Button>
                            <Menu items={MenuItems}>
                                <button className={style.MenuHeader}> ⋮</button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
