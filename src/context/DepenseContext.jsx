import { useReducer } from "react";
import { createContext } from "react";
import DepenseReducer from "../reducer/DepenseReducer";

export const DepenseContext = createContext(null);

export const initialDepense = {
    depenses: []
}

const DepenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DepenseReducer, initialDepense)

    return (
        <DepenseContext.Provider value={{ state, dispatch }} >
            {children}
        </DepenseContext.Provider>
    )
}

export default DepenseProvider;