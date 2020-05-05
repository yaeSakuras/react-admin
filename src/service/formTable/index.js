import request from "../../utils/request"

export function iGetTableData(query) {
    return request(`https://randomuser.me/api?&results=60&${query}`)
}