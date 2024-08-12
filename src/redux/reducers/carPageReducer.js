import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";



export default function carPageReducer(state = initialState.carPage, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CAR_PAGE:
            var addedCar = state.find(c=>c.car.id === action.payload.car.id);
            if(addedCar){
                var newState = state.map(pageItem=>{
                    if(pageItem.car.id === action.payload.car.id){
                        return Object.assign({},addedCar)
                    }
                    return pageItem;
                })
                return newState;
            }
            else{
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_CAR_PAGE:
            const newState2 = state.filter(pageItem=>pageItem.car.id !== action.payload.id)
            return newState2;
        default:
            return state;
    }
}
