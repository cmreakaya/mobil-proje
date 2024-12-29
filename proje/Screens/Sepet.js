import {useState, createContext, useContext, useEffect} from 'react' 
const BasketContext = createContext();

const BasketProvider = ({sepet}) => {
const [items, setItems] = useState([]);

const values = {
  items,
  setItems,
};

return (
  <BasketContext.Provider value={values}>{sepet}</BasketContext.Provider>
);
};
const useBasket = () => useContext(BasketContext);
export {BasketProvider, useBasket};
