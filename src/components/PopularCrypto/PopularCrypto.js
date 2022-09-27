import React from 'react';
import {POPULAR_CRYPTO} from "../../../TestInfo/utils";

import "./PopularCrypto.module.css"

const PopularCrypto = () => {
    return (
        <div className="popular-crypto_container">
            {POPULAR_CRYPTO.map((item)=>
                <div>
                    <span>{item[0]}</span>
                    <span>{item[1]}</span>
                </div>
            )}
        </div>
    );
};

export default PopularCrypto;