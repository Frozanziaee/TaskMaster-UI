import axios from 'axios'
 //const apiUrl = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const customFetch = axios.create({
 // baseURL: 'http://localhost:3000/api/v1',
  baseUrl:'taskmaster-api-production-d718.up.railway.app/api/v1',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`
  },
  

})

export default customFetch
