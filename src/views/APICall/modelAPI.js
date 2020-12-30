 import * as urlApis from './config'
 const axios = require('axios')
 const headers =  {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
}
/**
 * 
 * @param {*} url 
 * @param {*} token 
 * @param {*} callback 
 */
let getAPI = (url,token,callback)=>{
    const AuthStr = 'Bearer '.concat(token); 
    axios.get(url, { "headers": { "Authorization ": AuthStr } })
 .then(response => {
    
     return callback(false, response.data)
  })
 .catch((error) => {
    if (error.response) {
        return callback(error.response)
    } else if (error.request) {
        return callback("Please check your internet connection to server");
    } else {
        return callback(error.message)
    }
  });
}
/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} callback 
 */
let postAPI =(url,data,callback)=>{
    axios({
        url: url,
        method: 'POST',
        headers:headers,
        data :data
    }).then(response=>{
        return callback(false, response.data)
    }).catch(error=>{
        if (error.response) {
            return callback(error.response)
        } else if (error.request) {
            return callback("Please check your internet connection to server");
        } else {
            return callback(error.message)
        }
    });
}
/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} callback 
 */
let putAPI =(url,data,callback)=>{
    axios({
        url: url,
        method: 'PUT',
        headers:headers,
        data :data
    }).then(response=>{
        return callback(false, response.data)
    }).catch(error=>{
        if (error.response) {
            return callback(error.response)
        } else if (error.request) {
            return callback("Please check your internet connection to server");
        } else {
            return callback(error.message)
        }
    });
}
/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} callback 
 */
let patchAPI =(url,data,callback)=>{
    axios({
        url: url,
        method: 'PATCH',
        headers:headers,
        data :data
    }).then(response=>{
        return callback(false, response.data)
    }).catch(error=>{
        if (error.response) {
            return callback(error.response)
        } else if (error.request) {
            return callback("Please check your internet connection to server");
        } else {
            return callback(error.message)
        }
    });
}
module.exports ={
    getAPI:getAPI,
    postAPI:postAPI,
    putAPI: putAPI,
    patchAPI : patchAPI
}