import { CryptoPageContext } from './CryptoPageContext';


const CryptoPageContextProvider = ({value, children}) => {

    return (
        <CryptoPageContext.Provider value={value}>
            {children}
        </CryptoPageContext.Provider>
    );
};

export default CryptoPageContextProvider;