import React from 'react';
import CryptoTable from "../CryptoTable/CryptoTable";
import Pagination from "../Pagination/Pagination"

import styles from './Main.module.css'

const Main = () => {
    return (
        <main className={styles.main}>
            <CryptoTable />
            <Pagination />
        </main>
    );
};

export default Main;