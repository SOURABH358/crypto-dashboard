export default function Reducer(state, action){
    if(action.type==='COINS__DATA')
    {
        return {
            ...state,
            coins:[...action.payload.data]
        }
    }
}