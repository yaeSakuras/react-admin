import axios from "axios"
import qs from "qs"

axios.interceptors.request.use(config => {
    if (config.method === "post") {
        config.data = qs.stringify(config.data)
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    config.headers['temp-id'] = ''
    return config
}, err => {
    return Promise.resolve(err)
})

axios.interceptors.response.use(data => {
    return data.data
}, err => {
    return Promise.resolve(err)
})