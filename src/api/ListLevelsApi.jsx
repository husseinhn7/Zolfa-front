import Api from "./Base";

const ListLevelsApi = () => {
    return Api.get('/levels/list-levels/')
}

export default ListLevelsApi
