import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    ExploreIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    ExploreActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestAccounts from '~/components/SuggestAccounts/SuggestAccounts';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
            </Menu>
            <SuggestAccounts label="Suggested accounts" />
            <SuggestAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
