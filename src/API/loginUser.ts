import { api } from "./axios";

type User = {
  id: string;
  username: string;
  email: string;
  role: string;
  created_at: string;
  bio: string | null;
  profile_picture: string | null;
}

type LoginResponse = {
    user: User;
    token: string
};

const loginUser = async (inputData:object): Promise<LoginResponse> =>{
    const res = await api.post<LoginResponse>('/auth/login', inputData)
    return res.data
}

export {loginUser}