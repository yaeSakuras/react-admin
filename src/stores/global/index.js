import {observable, action} from "mobx"
import {iGetMenus} from "../../service/user"

function findNodeById(tree, query, id) {
    let value = ""

    function handle(data, id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i][query] === id) {
                value = data[i]
                break
            }
            if (data[i].children.length > 0) {
                handle(data[i].children, id)
            }
        }
    }

    handle(tree, id)
    return value
}

class GlobalStore {
    @observable collapsed = false
    @observable breadcrumbs = []
    @observable defaultOpenKeys = []
    @observable defaultSelectedKeys = []
    @observable menu = []

    @action
    toggle() {
        this.collapsed = !this.collapsed
    }

    @action
    initMenuKeys(url) {
        const pathToArry = findNodeById(this.menu, "url", url).path.split("-")
        this.breadcrumbs.replace(pathToArry.map(i => findNodeById(this.menu, "id", i).name))
        if (pathToArry.length > 1) {
            this.defaultOpenKeys.replace(pathToArry.splice(0, pathToArry.length - 1))
        }
        this.defaultSelectedKeys.replace(pathToArry)
    }

    @action
    routerChange(url) {
        const pathToArry = findNodeById(this.menu, "url", url).path.split("-")
        this.breadcrumbs.replace(pathToArry.map(i => findNodeById(this.menu, "id", i).name))
    }

    @action
    async getMenus(){
        if(this.menu.length === 0){
            this.menu = await iGetMenus()
        }
    }
}

export default GlobalStore