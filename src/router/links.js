const PUBLIC_ROUTES = [ 
    
    {
        name: 'LOGIN',
        path: '/login'
    },
    {
        name: 'REGISTER',
        path: '/register'
    }
]
const PRIVATE_ROUTES = [
    {
        name: 'Docs',
        path: '/'
    },
    {
        name: 'API KEY',
        path: '/api-key'
    }
]

export default {
    PUBLIC_ROUTES,
    PRIVATE_ROUTES
}