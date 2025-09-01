import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, HomeIcon, MessageIcon } from '~/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@quanthai',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <>
                                    <button className={cx('action-btn')}>
                                        <HomeIcon />
                                    </button>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a511a6dc253030c617e671db6b0dbc1d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=c7ca3462&x-expires=1756890000&x-signature=E64pIshdCeB55N2eI2eC86hUZzM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                                alt="Thai Thanh Quan"
                                fallBack="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/489690770_1191289149315850_8955359487974452286_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GYjTJk_25okQ7kNvwFKkObx&_nc_oc=AdkYA5n9FnwlHnvcsQiDKWY8b3YPJM0Op1MVIoq_72Zsp7rXFudWup2MCfrIAN4cK54&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=fHUWJa0QIPFc0V3YgmsEbw&oh=00_AfVjCMJXn1zTh9_wM-DyGsbQADqqOuMQytKQf5vlthXa1g&oe=68B4EF83"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
