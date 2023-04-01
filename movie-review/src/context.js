import React, { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();



const AppProvider = ({children}) =>{
    const [query, setQuery] = useState("marvel");
    const {movie, isLoading, isError} = useFetch(`&s=${query}`);


    return <AppContext.Provider
        value={{movie, isLoading, isError, query, setQuery}}
    >{children}</AppContext.Provider>
}


const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext, useGlobalContext}