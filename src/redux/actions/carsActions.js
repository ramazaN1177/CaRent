import * as actionTypes from "./actionTypes"

export function getCarsSuccess(cars) {
    return {
        type: actionTypes.GET_CARS_SUCCESS,
        payload: cars
    }
}






export async function handleResponse(response) {
    if (response.ok) {
        return response.json()
    }
    const error = await response.text()
    throw new Error(error)
}

export function handleError(error) {
    console.error("Something Went Wrong")
    throw error
}


export function getCars(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/cars";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getCarsSuccess(result)));
    };
}


