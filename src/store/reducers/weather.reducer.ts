import { WeatherAction } from "../../types";
import { SET_WEATHER_INFO } from "../action-types";

const INITIAL_STATE = {};

const weatherReducer = (state = INITIAL_STATE, action: WeatherAction) => {
    switch (action.type) {
        case SET_WEATHER_INFO: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default weatherReducer;
