import styles from './CryptoTableElement.module.css'

import {Link} from "react-router-dom";
import AddButton from "../AddButton/AddButton/AddButton";

const CryptoTableElement = ({ item}) => {

    return (
            <tr className={styles.element}>
                <td><Link to={`/page/${item.id}`}>{item.name}</Link></td>
                <td>{item.symbol}</td>
                <td>{Number(item.priceUsd).toFixed(2)}</td>
                <td>{Number(item.changePercent24Hr).toFixed(4)}</td>
                <td className={styles.trElement}>
                    <AddButton item={item}/>
                </td>
            </tr>
    );
};

export default CryptoTableElement;