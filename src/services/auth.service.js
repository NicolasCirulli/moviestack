import axios from 'axios'

const auth = axios.create({
    baseURL: import.meta.env.VITE_APP_API_SERVICE + '/auth'
})

const authService = {

    async login(data) {
        try {
            const response = await auth.post('/login', data)
            return response.data
        } catch (error) {
            return error.response.data
        }
    },

    async register(data){
        try {
            const response = await auth.post('/register', data)
            return response.data
        } catch (error) {
            return error.response.data
        }
    },

    async verifyAccount( id ){
        try {
            const response = await auth.get('/verify?id='+id)
            return {
                status : true
            }
        } catch (error) {
            return {
                status : false
            }
        }
    }

}

export default authService