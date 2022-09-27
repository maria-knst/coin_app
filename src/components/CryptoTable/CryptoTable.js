import React from 'react';

import style from './CryptoTable.module.css'
import CryptoTableElement from "../CryptoTableElement/CryptoTableElement";

import {CRYPTOS} from "../../TestInfo/utils";

const CryptoTable = () => {
    return (
        <table className={style.cryptoTable}>
            <thead className={style.headElement}>
            <tr>
                <td>Name</td>
                <td>Symbol</td>
                <td>Volume</td>
                <td>Last change24</td>
            </tr>
            </thead>
            <tbody>
            {
                CRYPTOS.map((item) =>
                <CryptoTableElement name={item.name} symbol={item.symbol} volume={item.volumeUsd24Hr} lastChange={item.changePercent24Hr} key={item.rank} />
                )
            }
            </tbody>
        </table>
    );
};

export default CryptoTable;