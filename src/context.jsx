import { useContext, useReducer, useEffect, createContext} from 'react';
import reducer from './reducer';

import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS  } from './actions';
import CartItem from './CartItem';

const AppContext = createContext()


const initialState = {
    loading:false,
    cart: [...CartItem]
}

export const AppProvider = ({children}) => {

const [state, dispatch] = useReducer(reducer, initialState);


    const greeting = 'hello';
    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}


