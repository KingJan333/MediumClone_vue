import axios from '@/api/axios'

const register = Credentials => {
    return axios.post('/users', {user: Credentials})
}

export default {
    register
}