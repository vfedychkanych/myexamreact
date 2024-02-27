import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {ICar} from "../intarfaces/carInterface";
import {IRes} from "../types/responseType";

const carService ={
    getAll: ():IRes<ICar[]> => apiService.get(urls.cars.base),
    getById: (id:number):IRes<ICar> => apiService.get(urls.cars.byId(id)),
    create: (data:ICar):IRes<ICar> => apiService.post(urls.cars.base, data),
    ubdateByID: (id:number, data:ICar): IRes<ICar> => apiService.put(urls.cars.byId(id), data),
    deleteeByID: (id:number): IRes<void> => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}