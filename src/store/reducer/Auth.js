const initialState={
    error:null,
    token:null,
    userId:null,
    loading:false,
    authRedirectPath:"/"
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case "AUTH_START":
            return{
                ...state,
                loading:true
            }
            case "AUTH_SUCCESS":
            return{
                ...state,
                loading:false,
                token:action.token,
                userId:action.userId

            }
            case "AUTH_LOGOUT":
                return{
                    ...state,
                    token:null,
                    userId:null
                }
            case "AUTH_FAIL":
                return{
                    ...state,
                    loading:false,
                    error:action.error

                }
                case "AUTH_REDIRECT_PATH":{
                    return{
                        ...state,
                        authRedirectPath:action.path
                    }
                }
                default:
                    return state
    }
}