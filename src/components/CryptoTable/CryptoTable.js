import React, {useEffect, useState} from 'react';

import style from './CryptoTable.module.css'
import CryptoTableElement from "../CryptoTableElement/CryptoTableElement";

import {showingCrypts} from "../../TestInfo/utils";

const CryptoTable = ({ data, showingPage }) => {

    const showPage = () => {
        const start =  (showingPage - 1) * showingCrypts;
        const end = start + showingCrypts;
        return data.slice(start, end)
    }

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
                showPage().map((item) =>
                <CryptoTableElement name={item.name} symbol={item.symbol} volume={item.volumeUsd24Hr} lastChange={item.changePercent24Hr} key={item.rank} />
                )}
            </tbody>
        </table>
    );
};

export default CryptoTable;