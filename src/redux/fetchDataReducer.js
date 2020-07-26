import axios from "axios";
import {API_LINK} from "../api/Unsplash";


//Action Types
const FETCHED_DATA='FETCHED_DATA';
const UPDATED_DATA='UPDATED_DATA';

//Action creators
export const receive_data = (dataArray) => {
    return {
        type: FETCHED_DATA,
        payload: dataArray
    };
};
export const update_data = (dataArray) => {
    return {
        type: UPDATED_DATA,
        payload: dataArray
    };
};


export const thunk_action_creator = () => {
    return function (dispatch, getState) {
        return axios.get(API_LINK).then(resp => {
            let dataArray = [];
            Array.from(resp.data).map((item, index) => {
                let obj ={}
                obj['url']= item.urls.regular;
                obj['description'] = item.description;
                obj['username'] = item.user.username;
                obj['profileImg'] = item.user.profile_image.medium;
                dataArray.push(obj)
                // dispatch(receive_data(url, description, username, profileImg))
                return null;
            })
            dispatch(receive_data(dataArray))
        })
    }
}


//reducer

const initialState = {
    imgData:{}
};

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_DATA:
            return {
                ...state,imgData: action.payload
            }
        case UPDATED_DATA:
            return {
                ...state,imgData: action.payload
            }
        default:
            return state;
    }

}