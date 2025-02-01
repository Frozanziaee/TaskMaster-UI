import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const customFetch = axios.create({
  //baseURL: '',
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`
  },
  

})

export default customFetch
