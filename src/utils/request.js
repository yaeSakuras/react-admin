import axios from "axios"

const request = (url, params) => {
    const method = params && params.method ? params.method : "get"
    return axios({
        method,
        url,
        ...params
    })
}

export default request