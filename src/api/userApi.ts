import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://143.198.168.244:3000/api/users',
});

export const apiRegisterUser = (userData: any) => apiClient.post('/register/v2', userData);
export const apiLoginUser = (loginData: any) => apiClient.post('/login', loginData);
export const apiFetchUsers = () => apiClient.get('/fetch/dummy/user-v2');
export const apiUpdateUserProfile = (userId: any, updateData: any) => apiClient.put('/profile?id=${userId}', updateData);
