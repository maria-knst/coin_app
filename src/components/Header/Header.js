import React from 'react';
import PopularCrypto from "../PopularCrypto/PopularCrypto";

import styles from './Header.module.css'
import Briefcase from "../Briefcase/Briefcase";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <PopularCrypto />
                <Briefcase />
            </div>
        </header>
    );
};

export default Header;