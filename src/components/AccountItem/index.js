import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a511a6dc253030c617e671db6b0dbc1d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=fbefda14&x-expires=1756119600&x-signature=aJ6e8Na6JC2g780oo6Tf4tMvhao%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                alt="Sanimeedy"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Thai Thanh Quan</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Quan Thai</span>
            </div>
        </div>
    );
}

export default AccountItem;
