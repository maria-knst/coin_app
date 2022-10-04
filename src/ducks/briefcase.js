//ACTIONS
export const ADD = 'ADD';
export const DELETE = 'DELETE';


//ACTIONS CREATORS
export const ACTION_ADD = (payload) => ({
    type: ADD,
    payload: payload,
});

export const ACTION_DELETE = (payload) => ({
    type: DELETE,
    payload: payload,
});


//INITIAL STATE
export const initialState = {
    bagData: [],
    count: 0,
    refill: {
        value: 0,
        direction: true,
    },
}

//REDUSER
export const reduser = (state, action) =>{
    switch (action.type){
        case ADD: {
            return {
                ...state,
                bagData: [...state.bagData, action.payload.item],
                count: (Number(state.count) + Number(action.payload.item.priceUsd) * Number(action.payload.item.multiplier)).toFixed(2),
                refill: {
                    value: (Number(action.payload.item.priceUsd)  * Number(action.payload.item.multiplier)).toFixed(2),
                    direction: true,
                }
            }
        }
        case DELETE: {
            return {
                ...state,
                bagData: state.bagData.filter((item) => item.id !== action.payload.item.id),
                count: (Number(state.count) - (Number(action.payload.item.priceUsd)  * Number(action.payload.item.multiplier))).toFixed(2),
                refill: {
                    value: (Number(action.payload.item.priceUsd) * Number(action.payload.item.multiplier)).toFixed(2),
                    direction: false,
                }
            }
        }
        default: return {...state}
    }
}
