import api from "./api";

export const registerUser = async(userData)=>{
    const response = await api.post(`/auth/register`, userData,{
        withCredentials:true,
    })
    return response.data;
}

export const loginUser = async(userData)=>{
    const response = await api.post(`/auth/login`, userData,{
        withCredentials:true,
    })
    return response.data;
}

