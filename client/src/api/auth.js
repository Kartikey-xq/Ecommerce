import api from "./api";

export const registerUser = async(userData)=>{
    const response = await api.post(`${baseUrl}/register`, userData,{
        withCredentials:true,
    })
    return response.data;
}

export const loginUser = async(userData)=>{
    const response = await api.post(`${baseUrl}/login`, userData,{
        withCredentials:true,
    })
    return response.data;
}

