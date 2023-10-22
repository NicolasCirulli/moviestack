import axios from 'axios'

const auth = axios.create({
    baseURL: import.meta.env.VITE_APP_API_SERVICE + '/auth'
})

const authService = {

    async login(data) {
        try {
            const response = await auth.post('/login', data)
            localStorage.setItem( 'token', response.data.token )
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
            return true
        } catch (error) {
            return false
        }
    },
    async loginWithToken() {
        try {
            const token = localStorage.getItem( 'token' )
            const response = await auth.post('/login/token',{}, {
                headers : {
                    Authorization : 'Bearer ' + token
                }
            })
            return response.data.user
        } catch (error) {
            return error.response.data
        }
    },

}

export default authService