import React, {  useContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
const initialState = {
    coins: [],
    current: "",
    exchanges: [],
    globalStats:[]
}
const AppContext = React.createContext();
function AppWrapper({ children }) {
    const [GlobalState, dispatch] = useReducer(Reducer, initialState);
    const coinOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a1238b7942msh225a191ee761b65p1ba5e1jsn457057aff454',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    const exchangeOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a1238b7942msh225a191ee761b65p1ba5e1jsn457057aff454',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    const globalOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a1238b7942msh225a191ee761b65p1ba5e1jsn457057aff454',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', coinOptions)
            .then(response => response.json())
            .then(response => {
                // console.log(response.data.coins)
                return dispatch({ type: 'COINS__DATA', payload: { data: response.data.coins } })
            })
            .catch(err => console.error(err));


        fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc', exchangeOptions)
            .then(response => response.json())
            .then(response => { return dispatch({ type: 'GET__EXCHANGES', payload: { data: response.data.exchanges } }) })
            .catch(err => console.error(err));

        fetch('https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl', globalOptions)
            .then(response => response.json())
            .then(response => dispatch({type:'GET__GLOBALSTATS', payload:{data: response.data}}))
            .catch(err => console.error(err));
    }, [])
    console.log(GlobalState.current)
    // useEffect(()=>{

    // },GlobalState.current)
    function changeCurrent(e) {
        dispatch({ type: 'CHANGE__CURRENT', payload: { data: e.target.value } })
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
function GlobalContext() {
    return useContext(AppContext);
}
export { AppWrapper, GlobalContext };