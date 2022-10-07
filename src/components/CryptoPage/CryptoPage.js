import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../Header/Header";
import CryptoGraphic from "../CryptoGraphic/CryptoGraphic";
import CryptoInfo from "../CryptoInfo/CryptoInfo";

import style from './CryptoPage.module.css'

const CryptoPage = () => {

    const { itemId } = useParams();
    const [itemHistory, setItemHistory] = useState([])
    const [itemElem, setItemElem] = useState({})

    const madeData = () => {
        const res = [];
        itemHistory.map((it)=>{
            res.push({
                name: new Date(it.time).toDateString(),
                uv: Number(it.priceUsd).toFixed(4),
                amt: it.time,
            })
        })

        return res;
    }

    const getElementHisotyByID = async (id) => {
        const url = `https://api.coincap.io/v2/assets/${id}/history?interval=d1`;
        const response = await fetch(url);
        const result = await response.json()
        setItemHistory(result.data)
    }

    const getElementByID = async (id) => {
        const url = `https://api.coincap.io/v2/assets/${id}`;
        const response = await fetch(url);
        const result = await response.json()
        setItemElem(result.data)
    }

    useEffect(()=>{
        getElementHisotyByID(itemId)
        getElementByID(itemId)
    },[])


    return (
        <div>
            <Header />
            <div className={style.container}>
                <CryptoGraphic data={madeData()} />
                <CryptoInfo item={itemElem}/>
            </div>
        </div>
    );
};

export default CryptoPage;