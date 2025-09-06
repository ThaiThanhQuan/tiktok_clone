import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a511a6dc253030c617e671db6b0dbc1d~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=1acf2269&x-expires=1757329200&x-signature=0Ubwkc1K1dhhTWEdnnaaFGtYDBE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quanthai</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Quân Thái</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
