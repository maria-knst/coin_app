import style from './CryptoTable.module.css'
import CryptoTableElement from "../CryptoTableElement/CryptoTableElement";

import {showingCrypts} from "../../utils/utils";

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
                <td>Price USD</td>
                <td>Last change24</td>
            </tr>
            </thead>
            <tbody>
            {
                showPage().map((item) =>
                <CryptoTableElement item={item} key={item.rank} />
                )}
            </tbody>
        </table>
    );
};

export default CryptoTable;