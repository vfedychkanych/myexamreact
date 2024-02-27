import {Dispatch, SetStateAction} from "react";
import {ICar} from "../intarfaces/carInterface";

type ISetState<T> = Dispatch<SetStateAction<T>>

export type {
    ISetState
}