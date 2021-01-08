const moment = require('moment')
const user = "user"
const token = "token"
const ttl = 4000


const setUser = (userObj,t)=>{
    const now  = new Date()
    let data = {
        user:userObj,
        expiry : now.getTime() + time||ttl
    }
    localStorage.setItem(user,JSON.stringify(data))    
}
const getUser = () =>{
 
    try {
        let data = JSON.parse(localStorage.getItem(user)) 
        const expiry =data.expiry
        if(new Date().getTime() > expiry){
            
        }
         return data.user
    } catch (error) {
      return null
    }
}
const setToken =(stringToken)=>{
    localStorage.setItem(token,stringToken)
}
const getToken = () =>{
    return localStorage.getItem(token)
}
const encode = (jsonObject) =>{

}
const decode = (jsonObject) =>{

}
module.exports ={
    getUser:getUser,
    getToken:getToken,
    setToken:setToken,
    setUser:setUser
}