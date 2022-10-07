import styles from './ModalBriefcase.module.css'
import {useSelector, useDispatch} from "react-redux";
import {ACTION_DELETE} from "../../ducks/briefcase";

const ModalBriefcase = () => {

    const arr_data = useSelector((state) => state.bagData);

    const dispatch = useDispatch()

    const handleDeleteClick = (item) => {
        dispatch(ACTION_DELETE({item}))

    }

    return (
        <div className={styles.modal}>
            <ul>
            {
                arr_data.map((item, index) =>
                    <li key={index}>{item.name} <span>{(Number(item.priceUsd) * Number(item.multiplier)).toFixed(2)}</span> <button className={styles.buttonElem} onClick={handleDeleteClick.bind(this, item)}>-</button></li>
                )
            }
            </ul>
        </div>
    );
};

export default ModalBriefcase;