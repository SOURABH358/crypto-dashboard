import React, { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
const initialState={
    coins:[],
    current:"",
}
const AppContext = React.createContext();
function AppWrapper({children}){
    const [GlobalState, dispatch] = useReducer(Reducer, initialState);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a1238b7942msh225a191ee761b65p1ba5e1jsn457057aff454',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    useEffect(()=>{
        fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
            .then(response => response.json())
            .then(response => {
                // console.log(response.data.coins)
                return dispatch({type:'COINS__DATA', payload: {data: response.data.coins}})})
            .catch(err => console.error(err));
    },[])
    // console.log(GlobalState.current.sparkline)
    // useEffect(()=>{

    // },GlobalState.current)
    function changeCurrent(e){
       dispatch({type:'CHANGE__CURRENT', payload:{data:e.target.value}})
    }
    return (
        <AppContext.Provider
        value={{
            ...GlobalState,
            changeCurrent
        }}
        >
            {children}
        </AppContext.Provider>
    )
}
function GlobalContext(){
    return useContext(AppContext);
}
export {AppWrapper, GlobalContext};