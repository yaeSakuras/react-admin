import request from "../../utils/request"

export function iGetMenus() {
    return request("/mock/menu.json")
}