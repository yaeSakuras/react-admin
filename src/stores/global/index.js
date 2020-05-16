import {observable, action} from "mobx"

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
    @observable menu = [{
        id: "1",
        pid: "0",
        name: "首页",
        path: "1",
        children: [{
            id: "11",
            pid: "1",
            name: "图表",
            path: "1-11",
            children: []
        }, {
            id: "12",
            pid: "1",
            name: "工作台",
            path: "1-12",
            children: []
        }]
    }, {
        id: "2",
        pid: "0",
        name: "表单页",
        path: "2",
        children: [{
            id:"21",
            pid:"2",
            name: "基础表单",
            path: "2-21",
            url:"/home/basic-form",
            children: []
        },{
            id:"22",
            pid:"2",
            name: "分步表单",
            path: "2-22",
            url:"/home/step-form",
            children: []
        }]
    }, {
        id: "3",
        pid: "0",
        name: "列表页",
        path: "3",
        children: [{
            id:"31",
            pid:"3",
            name: "基础列表",
            path: "3-31",
            url:"/home/basic-list",
            children: []
        },{
            id:"32",
            pid:"3",
            name: "查询表格",
            path: "3-32",
            url:"/home/table-list",
            children: []
        }]
    },{
        id: "4",
        pid: "0",
        name: "详情页",
        path: "4",
        children: [{
            id:"41",
            pid:"4",
            name: "基础详情页",
            path: "4-41",
            url:"/home/basic-detail",
            children: []
        }]
    },{
        id: "5",
        pid: "0",
        name: "个人页",
        path: "5",
        children: [{
            id:"51",
            pid:"5",
            name: "个人中心",
            path: "5-51",
            url:"/home/user-center",
            children: []
        },{
            id:"52",
            pid:"5",
            name: "个人设置",
            path: "5-52",
            url:"/home/user-setting",
            children: []
        }]
    }]

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
}

export default GlobalStore