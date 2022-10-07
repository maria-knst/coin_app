import ModalAdditing from "../../ModalAdditing/ModalAdditing";
import styles from "../../CryptoTableElement/CryptoTableElement.module.css";
import {useState} from "react";

import style from './AddButton.module.css'

const AddButton = ({ item }) => {

    const [visible, setVisible] = useState()

    const handleAddClick = (e) =>{
        e.preventDefault()
        setVisible(!visible)
    }

    return (
        <div className={style.buttonContainer}>
            <button onClick={handleAddClick}>Add</button>
            {visible && <ModalAdditing className={styles.addElement} sendItem={item} setVisible={setVisible}/>}
        </div>

    );
};

export default AddButton;