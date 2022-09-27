import React from 'react';

import styles from './Pagination.module.css'

const Pagination = () => {
    return (
        <div className={styles.pag_container}>
            <div className={styles.pag_item}>1</div>
            <div className={styles.pag_item}>2</div>
            <div className={styles.pag_item}>3</div>
            <div className={styles.pag_item}>4</div>
            <div className={styles.pag_item}>5</div>
        </div>
    );
};

export default Pagination;