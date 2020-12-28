import axios from "axios"

export const authStart=()=>{
    return{
        type:"AUTH_START"
    }
}
export const authSuccess=(token,userId)=>{
    return{
        type:"AUTH_SUCCESS",
        token:token,
        userId:userId
    }
}
export const authFail=(error)=>{
    return{
        type:"AUTH_FAIL",
        error:error
    }
}
export const authLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem("userId")
    return{
        type:"AUTH_LOGOUT"
    }
}
export const authRedirectPath=(path)=>{
    return{
        type:"AUTH_REDIRECT_PATH",
        path:path
}
}
 export const checkAuthTimeout=(expire)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(authLogout())
        },expire * 1000)
    }  
  }

export const auth=(email,password,isSignup)=>{
    return dispatch=>{
        dispatch(authStart())
        const authData={
            
                email,
                password,
                returnSecureToken:true
            
        }
        dispatch(checkAuthTimeout())

        
        

let url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8aMyBRFw_g4ZSUHV6crYwdz1PHBgQGJ8";
        if(!isSignup){
             url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8aMyBRFw_g4ZSUHV6crYwdz1PHBgQGJ8";

        }
        axios.post(url,authData
        ).then(res=>{
            localStorage.setItem('token',res.data.idToken)
            const expirationDate=new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('expirationDate',expirationDate)
            localStorage.setItem("userId",res.data.localId)
            dispatch(authSuccess(res.data.idToken,res.data.localId))
            console.log(res.data.idToken,"TOKEN")
            dispatch(checkAuthTimeout(res.data.expiresIn))
          

        }).catch(error=>{
            dispatch(authFail(error))
           
        })
    }
}
export const authStateChange=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token')
        console.log(token,"ttoken")
        if(!token){
            dispatch(authLogout())

        }else{
            const expirationDate=new Date(localStorage.getItem('expirationDate'))   //Since the data receiuved from the local storage will be of string type so we have to convert itinto numver
            if(expirationDate<=new Date()){
                dispatch(authLogout())
            } else{
                const userId=localStorage.getItem("userId")
                dispatch(authSuccess(token,userId))
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000))
                // dispatch(authLogout())
            }
        }
    }
}