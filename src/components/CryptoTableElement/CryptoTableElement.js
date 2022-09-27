import React from 'react';

import styles from './CryptoTableElement.module.css'

const CryptoTableElement = ({ name, symbol, volume, lastChange }) => {

    return (
        <tr className={styles.element}>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>{Number(volume).toFixed(2)}</td>
            <td>{Number(lastChange).toFixed(4)}</td>
            <td><button>+</button></td>
        </tr>
    );
};

export default CryptoTableElement;