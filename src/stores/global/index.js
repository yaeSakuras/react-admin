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
    @observable openKeys = []
    @observable selectedKeys = []
    @observable menu = []

    @action
    toggle() {
        this.collapsed = !this.collapsed
    }

    @action
    onSelectedChange(key) {
        this.selectedKeys.replace([key])
    }

    @action
    onOpenChange(keys) {
        if (keys.length > 1) {
            const current = keys.slice(keys.length - 1)
            const node = findNodeById(this.menu, "id", current[0])
            if (node.pid === "0") {
                this.openKeys.replace(current)
            } else {
                this.openKeys.replace(keys)
            }
        } else {
            this.openKeys.replace(keys)
        }
    }

    @action
    initMenuKeys(url) {
        const pathToArry = findNodeById(this.menu, "url", url).path.split("-")
        if (pathToArry.length > 1) {
            this.openKeys.replace(pathToArry.splice(0, pathToArry.length - 1))
        }
        this.selectedKeys.replace(pathToArry)
        this.breadcrumbs.replace(pathToArry.map(i => findNodeById(this.menu, "id", i).name))
    }

    @action
    routerChange(url) {
        const pathToArry = findNodeById(this.menu, "url", url).path.split("-")
        this.breadcrumbs.replace(pathToArry.map(i => findNodeById(this.menu, "id", i).name))
    }

    @action
    async getMenus() {
        if (this.menu.length === 0) {
            this.menu = await iGetMenus()
        }
    }
}

export default GlobalStore