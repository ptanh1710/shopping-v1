import React from 'react';
import classNames from 'classnames/bind';

import styles from './NoSidebar.module.scss';
import { Header } from '../components';

const cx = classNames.bind(styles);
function NoSidebar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default NoSidebar;
