import style from './CryptoInfo.module.css'
import AddButton from "../AddButton/AddButton/AddButton";

const CryptoInfo = ({ item }) => {


    return (
        <div className={style.container}>
            {Object.entries(item).map((it,index)=>
                <p key={index}>{` ${it[0]}:  ${it[1]}`}</p>
            )}
            <AddButton item={item}/>
        </div>
    );
};

export default CryptoInfo;