import { act } from "react-dom/test-utils"

export default function Reducer(state, action){
    if(action.type==='COINS__DATA')
    {
        return {
            ...state,
            coins:[...action.payload.data],
            current: action.payload.data[0]
        }
    }
    if(action.type==='CHANGE__CURRENT'){
        return{
            ...state,
            current:  state.coins.filter(el=>{
                // console.log(action.payload.data)
                return el.symbol===action.payload.data
            })[0]
        }
    }
}