import {axiosService} from "./axios.service";

import {urls} from "../constants/urls";


export const productService = {
    getAll: () => axiosService.get(urls.products),
    getCategories: () => axiosService.get(urls.products + '/categories')
}