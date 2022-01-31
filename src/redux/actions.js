import * as types from "./actionTypes";
import axios from 'axios';

const getUsers = (users)=>({
    type: types.GET_USER,
    payload: users,
})
const userDeleted = ()=>({
    type: types.DELETE_USER
})
const userAdded = ()=>({
    type: types.ADD_USER
})
const getUser = (user)=>({
    type: types.GET_SINGLE_USER,
    payload: user
})
const userUpdated = ()=>({
    type: types.UPDATE_USER
})
export const loadUser=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
            dispatch(getUsers(resp.data));

        }).catch((error)=>{

        })
    }
}
export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
            dispatch(userDeleted());
            dispatch(loadUser());
        }).catch((error)=>{

        })
    }
}
export const addUser=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user).then((resp)=>{
            dispatch(userAdded());
            dispatch(loadUser());
        }).catch((error)=>{

        })
    }
}
export const getSingleUser=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
            dispatch(getUser(resp.data));

        }).catch((error)=>{

        })
    }
}
export const updateUser=(user,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((resp)=>{
            dispatch(userUpdated());

        }).catch((error)=>{

        })
    }
}