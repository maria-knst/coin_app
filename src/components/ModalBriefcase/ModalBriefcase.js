import React from 'react';

import styles from './ModalBriefcase.module.css'
import {useSelector} from "react-redux";

const ModalBriefcase = () => {

    const arr_data = useSelector((state) => state.bagData);

    return (
        <div className={styles.modal}>
            <ul>
            {
                arr_data.map((item, index) =>
                    <li key={index}>{item.name}</li>
                )
            }
            </ul>
        </div>
    );
};

export default ModalBriefcase;