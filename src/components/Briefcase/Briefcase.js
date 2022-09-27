import React from 'react';

import style from './Briefcase.module.css'
import ModalBriefcase from "../ModalBriefcase/ModalBriefcase";

const Briefcase = () => {
    return (
        <div className={style.parent}>
            <div className={style.caseElement}>
                <a><span>134,32 </span>USD <span>+2,38</span> (<span>1,80 </span>%)</a>
            </div>
            <ModalBriefcase />
        </div>

    );
};

export default Briefcase;