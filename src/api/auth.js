import axios from '@/api/axios'

const register = Credentials => {
    return axios.post('/users', {user: Credentials})
}

const login = credentials => {
    return axios.post('/user/login', {user: credentials})
}

export default {
    register,
    login
}