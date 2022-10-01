import React, {useEffect, useState} from 'react';

import style from './CryptoTable.module.css'
import CryptoTableElement from "../CryptoTableElement/CryptoTableElement";


const CryptoTable = () => {

    const [data, setData] = useState([])


    const fetchCrypto = async () => {
        const response = await fetch('https://api.coincap.io/v2/assets')
        const result = await response.json()
        setData(result.data.slice(0,20))
    }

    useEffect(() => {
        fetchCrypto()
    }, [])

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
                data.map((item) =>
                <CryptoTableElement name={item.name} symbol={item.symbol} volume={item.volumeUsd24Hr} lastChange={item.changePercent24Hr} key={item.rank} />
                )
            }
            </tbody>
        </table>
    );
};

export default CryptoTable;