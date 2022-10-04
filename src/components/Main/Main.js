import { useState, useEffect } from "react";

import CryptoTable from "../CryptoTable/CryptoTable";
import Pagination from "../Pagination/Pagination"

import {showingCrypts} from "../../utils/utils";

import styles from './Main.module.css'

const Main = () => {

    const [data, setData] = useState([])

    const fetchCrypto = async () => {
        const response = await fetch('https://api.coincap.io/v2/assets')
        const result = await response.json()
        setData(result.data)
    }

    useEffect(() => {
        fetchCrypto()
    }, [])

    const [page, setPage] = useState(1)

    return (
        <main className={styles.main}>
            <CryptoTable showingPage={page} data={data} />
            <Pagination setPage={setPage} amount={Math.ceil(data.length/showingCrypts)} />
        </main>
    );
};

export default Main;