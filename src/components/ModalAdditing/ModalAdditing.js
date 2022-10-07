import {useState} from "react";
import {useDispatch} from "react-redux";
import {ACTION_ADD} from "../../ducks/briefcase";

import style from './ModalAdditing.module.css'

const ModalAdditing = ({sendItem, setVisible, ...props}) => {

    const dispatch = useDispatch()
    const [sendingValue, setSendingValue] = useState(0)

    const handleChange = (e) =>{
        e.preventDefault()
        setSendingValue(e.target.value);
    }

    const handleAddClick = (e) =>{
        e.preventDefault()
        if(String(sendingValue).match(/^\d+\.?\d*$/)){
            sendItem.multiplier = Number(sendingValue)
            dispatch(ACTION_ADD({
                item: sendItem
            }))
            setVisible(false);
        }
        else {
            setSendingValue('try again');
        }

    }


    return (
        <div {...props}>
                <input type='text' name="sendingValue" value={sendingValue} onChange={handleChange}/>
            <button className={style.buttonElem} onClick={handleAddClick}>+</button>
        </div>
    );
};

export default ModalAdditing;