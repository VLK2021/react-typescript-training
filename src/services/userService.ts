import {axiosService, IRes} from "./axios.service";
import {IUser} from "../interfaces/userInterface";
import {urls} from "../constants/urls";


const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users.base),
    getById: (id:number): IRes<IUser> => axiosService.get(urls.users.byID(id))
}

export {
    userService
}