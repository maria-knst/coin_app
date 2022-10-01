//ACTIONS
export const ADD = 'ADD';


//ACTIONS CREATORS
export const ACTION_ADD = (payload) => ({
    type: ADD,
    payload: payload,
});

//INITIAL STATE
export const initialState = {
    bagData: [],
    count: 0,
    refill: 0,
}

//REDUSER
export const reduser = (state, action) =>{
    if(action.type === ADD){
        return {
            ...state,
            bagData: [...state.bagData, action.payload],
            count: (Number(state.count) + Number(action.payload.priceUsd)).toFixed(2),
            refill: Number(action.payload.priceUsd).toFixed(2)
        }
    }

    return state;
}