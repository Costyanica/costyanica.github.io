import React from 'react';
import styles from './Header.module.css';

const Header = () => (<div className={styles.header}>
    <ul className={styles.menu}>
        <li>МОИ АВТОМОБИЛИ</li>
        <li>НАСТРОЙКИ</li>
        <li>ФИНАНСЫ</li>
        <li>...</li>
    </ul>
    <div className={styles.user}>
        <span className='user_name'>Иван Сергеенко</span>
    </div>
</div>);

export default Header;