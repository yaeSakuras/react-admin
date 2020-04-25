import {observable, action} from "mobx"

function findNodeById(tree, id) {
    let value = ""

    function handle(data, id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].url === id) {
                value = data[i].path
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
    @observable defaultOpenKeys = []
    @observable defaultSelectedKeys = []
    @observable menu = [{
        id: 1,
        pid: 0,
        name: "菜单1",
        path: "1",
        children: [{
            id: 11,
            pid: 1,
            name: "菜单1-1",
            path: "1-11",
            children: []
        }, {
            id: 12,
            pid: 1,
            name: "菜单1-2",
            path: "1-12",
            children: [{
                id: 121,
                pid: 12,
                name: "用户页",
                path: "1-12-121",
                url: "/home/user",
                children: []
            }, {
                id: 122,
                pid: 12,
                name: "菜单1-2-2",
                path: "1-12-122",
                children: []
            }]
        }, {
            id: 13,
            pid: 1,
            name: "菜单1-3",
            path: "1-13",
            children: []
        }]
    }, {
        id: 2,
        pid: 0,
        name: "home",
        path: "2",
        url: "/home",
        children: []
    }, {
        id: 3,
        pid: 0,
        name: "菜单3",
        path: "3",
        children: []
    }]

    @action
    toggle() {
        this.collapsed = !this.collapsed
    }

    @action
    initMenuKeys(url) {
        let path = findNodeById(this.menu, url).split("-")
        if(path.length > 1){
            this.defaultOpenKeys.replace(path.splice(0, path.length - 1))
        }
        this.defaultSelectedKeys.replace(path)
    }

    @action
    test() {
        this.menu.push({
            id: 4,
            pid: 0,
            name: "菜单4",
            children: []
        })
    }
}

export default GlobalStore