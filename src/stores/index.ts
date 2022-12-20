import { createContext, useContext } from "react";
import PokedexStore from "./PokedexStore";

const store = {
    app: PokedexStore(),
}

export const StoreContext = createContext(store);
export const useStore = () => {
    return useContext(StoreContext) as typeof store;
}

export default store;