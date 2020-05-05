import {action, observable} from "mobx"
import {iGetTableData} from "../../service/formTable"

class UserStore {
    @observable name = "zzh"

    @action
    async getTableData({current, pageSize}, formData) {
        let query = `page=${current}&size=${pageSize}`
        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                query += `&${key}=${value}`
            }
        })
        const data = await iGetTableData(query)
        return {
            total: data.info.results,
            list: data.results.map(i => {
                i.last = i.name.last
                return i
            }),
        }
    }
}

export default UserStore