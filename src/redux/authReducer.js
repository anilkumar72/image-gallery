
const initialState = {
    auth:false
};

export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SET_AUTH":  return{
            ...state,auth:true
        }
        case "REMOVE_AUTH":  return{
            ...state,auth: false
        }
        default:return state;


    }

}