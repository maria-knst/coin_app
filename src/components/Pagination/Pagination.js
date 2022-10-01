import React from 'react';

import styles from './Pagination.module.css'

const Pagination = ({ setPage, amount }) => {

    const getPaginations = (length) => {
        let content = [];
        for (let i = 0; i < length; i++) {
            content.push(<div className={styles.pag_item} onClick={handleClick} key={i}>{i+1}</div>);
        }
        return content
    };

    const handleClick = (e) => {
        e.preventDefault()
        const res = +e.target.innerText;
        setPage(res)
    }

    return (
        <div className={styles.pag_container}>
            {getPaginations(amount)}
        </div>
    );
};

export default Pagination;