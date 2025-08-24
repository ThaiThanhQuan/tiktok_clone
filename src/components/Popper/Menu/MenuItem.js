import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <Button className={cx('menu-item')} key={index} leftIcon={item.icon} to={item.to}>
                    {item.title}
                </Button>
            ))}
        </>
    );
}

export default MenuItem;
