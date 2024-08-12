import * as actionTypes from "./actionTypes"

export function addToCarPage(carPageItem){
    return {
        type : actionTypes.ADD_TO_CAR_PAGE,
        payload : carPageItem,
 
    }      
}

export function removeFromCarPage(car){
    return {
        type : actionTypes.REMOVE_FROM_CAR_PAGE,
        payload : car,
 
    }      
}