import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import style from './CryptoGraphic.module.css'

const CryptoGraphic = ({ data }) => {


    return (
        <div className={style.parentContainer}>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                className={style.lineChart}
                width={1000}
                height={500}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default CryptoGraphic;