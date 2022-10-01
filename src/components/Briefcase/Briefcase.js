import React from 'react';
import {useSelector} from "react-redux";

import style from './Briefcase.module.css'

import ModalBriefcase from "../ModalBriefcase/ModalBriefcase";
import { getPercent } from "../../utils/utils";

const Briefcase = () => {

    const totalPrice = useSelector((state)=> state.count);
    const last_refill = useSelector((state) => state.refill.value);
    const last_refill_direction = useSelector((state) => state.refill.direction);

    return (
        <div className={style.parent}>
            <div className={style.caseElement}>
                <a><span>{totalPrice} </span>USD <span>{last_refill_direction ? '+' : '-'}</span><span>{last_refill}</span> (<span>{getPercent(+totalPrice, +last_refill).toFixed(2)} </span>%)</a>
            </div>
            <ModalBriefcase />
        </div>

    );
};

export default Briefcase;