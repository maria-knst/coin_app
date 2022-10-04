import styles from './CryptoTableElement.module.css'

import ModalAdditing from "../ModalAdditing/ModalAdditing";
import {useState} from "react";

const CryptoTableElement = ({ item}) => {

    const [visible, setVisible] = useState()

    const handleAddClick = (e) =>{
        e.preventDefault()
        setVisible(!visible)
    }

    return (
            <tr className={styles.element}>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{Number(item.priceUsd).toFixed(2)}</td>
                <td>{Number(item.changePercent24Hr).toFixed(4)}</td>
                <td className={styles.trElement}>
                    <button onClick={handleAddClick}>Add</button>
                    {visible && <ModalAdditing className={styles.addElement} sendItem={item} setVisible={setVisible}/>}
                </td>
            </tr>
    );
};

export default CryptoTableElement;