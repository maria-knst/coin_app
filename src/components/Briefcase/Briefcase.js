import {useSelector} from "react-redux";

import style from './Briefcase.module.css'

import ModalBriefcase from "../ModalBriefcase/ModalBriefcase";
import { getPercent } from "../../utils/utils";
import {useState} from "react";

const Briefcase = () => {

    const totalPrice = useSelector((state)=> state.count);
    const last_refill = useSelector((state) => state.refill.value);
    const last_refill_direction = useSelector((state) => state.refill.direction);

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div className={style.parent} onClick={handleClick}>
            <div className={style.caseElement}>
                <a><span>{totalPrice} </span>USD <span>{last_refill_direction ? '+' : '-'}</span><span>{last_refill}</span> (<span>{getPercent(+totalPrice, +last_refill).toFixed(2)} </span>%)</a>
            </div>
            { visible && <ModalBriefcase />}
        </div>

    );
};

export default Briefcase;