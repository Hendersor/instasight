
import { api } from "./axios";

const loginUser = async (data:object) =>{
    const res = await api.post('/auth/login', data)
    console.log(res.data)
}

export {loginUser}