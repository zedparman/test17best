export default function ({ $axios, store, redirect }) {
    $axios.onRequest(request => {
        let token = localStorage.getItem('token')
        console.log(token)
        if(token) {
            request.headers.common['Authorization'] = `Token ${token}`
        }
    })
}
