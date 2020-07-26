import axios from "axios";
import {API_LINK} from "../api/Unsplash";

export const receive_data = data => {
    return {
        type: "FETCHED_DATA",
        data: data
    };
};

    export const thunk_action_creator=()=>{
    return function(dispatch, getState) {
        return axios.get(API_LINK).then(resp => dispatch(receive_data(resp.data)))
    }
}
const initialState = {
    imgData: {}
};

export const fetchDataReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "FETCHED_DATA":return {
            ...state,imgData:action.data
        }
        default:return state;
    }

}