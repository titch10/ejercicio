import axios from 'axios'
const API = 'http://localhost:4000/api';
export const registerRequest= (number) => axios.post(`${API}/register`, number)