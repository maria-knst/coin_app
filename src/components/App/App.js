import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "../Header/Header";
import Main from "../Main/Main";

import styles from './App.module.css'
import CryptoPage from "../CryptoPage/CryptoPage";
import CryptoPageContextProvider from "../../context/CryptoPageContext/CryptoPageContextProvider";
import {useState} from "react";

function App() {
    const [contextItem, setContextItem] = useState(null)

  return (
      <Router basename="/">
        <Routes>
            <Route path="/" element={
                <CryptoPageContextProvider value={{contextItem, setContextItem}}>
                    <div className={styles.App}>
                        <Header />
                        <Main />
                    </div>
                </CryptoPageContextProvider>
            }/>
            <Route path="/page/:itemId" element={<CryptoPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
