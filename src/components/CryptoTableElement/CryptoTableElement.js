import React from 'react';

import styles from './CryptoTableElement.module.css'
import {useDispatch} from "react-redux";

import {ACTION_ADD} from "../../ducks/briefcase";

const CryptoTableElement = ({ item }) => {

    const dispatch = useDispatch()

    const handleAddClick = () =>{
        dispatch(ACTION_ADD(item))
    }

    return (
        <tr className={styles.element}>
            <td>{item.name}</td>
            <td>{item.symbol}</td>
            <td>{Number(item.priceUsd).toFixed(2)}</td>
            <td>{Number(item.changePercent24Hr).toFixed(4)}</td>
            <td><button onClick={handleAddClick}>+</button></td>
        </tr>
    );
};

export default CryptoTableElement;