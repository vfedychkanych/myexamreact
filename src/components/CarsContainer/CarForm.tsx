import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../intarfaces/carInterface";
import {carService} from "../../services/carService";
import {FC, useEffect} from "react";
import {ISetState} from "../../types/setStateType";

interface IProps{
    changeTrigger:()=>void,
    setCarForUpdate: ISetState<ICar>,
    carForUpdate: ICar
}

const CarForm:FC<IProps> = ({changeTrigger, setCarForUpdate, carForUpdate}) => {
    const {reset,handleSubmit,register,setValue } = useForm<ICar>();

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
        }
    }, [carForUpdate, setValue]);
const update:SubmitHandler<ICar> = async (car) => {
    await carService.ubdateByID(carForUpdate.id, car)
    changeTrigger()
    setCarForUpdate(null)
    reset()
}
    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changeTrigger();
        reset()
    }



    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate?'update':"save"}</button>
        </form>
    );
};

export {CarForm};