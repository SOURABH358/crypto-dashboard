import React, { createContext, useContext, useEffect } from "react";
const initialState={
    coins:{}
}
const AppContext = React.createContext();
function AppWrapper({children}){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a1238b7942msh225a191ee761b65p1ba5e1jsn457057aff454',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    useEffect(()=>{
        // fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
    },[])
    return (
        <AppContext.Provider
        value={{}}
        >
            {children}
        </AppContext.Provider>
    )
}
function GlobalContext(){
    return useContext(AppContext);
}
export {AppWrapper, GlobalContext};