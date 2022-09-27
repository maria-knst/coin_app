import React from 'react';
import {POPULAR_CRYPTO} from "../../TestInfo/utils";

import styles from "./PopularCrypto.module.css"

const PopularCrypto = () => {
    return (
        <div className={styles.popularCrypto_container}>
            {POPULAR_CRYPTO.map((item, index)=>
                <div className={styles.popularCrypto_element} key={index}>
                    <span>{item[0]} </span>
                    <span>{item[1]}</span>
                </div>
            )}
        </div>
    );
};

export default PopularCrypto;