import {AxiosResponse} from "axios";
import {ICar} from "../intarfaces/carInterface";

type IRes<T> = Promise<AxiosResponse<T>>
export type {
    IRes
}