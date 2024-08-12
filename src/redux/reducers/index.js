import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import carsListReducer from "./carsListReducer";
import carPageReducer from "./carPageReducer";



const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    carsListReducer,
    carPageReducer,

})

export default rootReducer;