

import { ifError } from "assert";
import { Car } from "../interface/car.interface";
import ItemModel from "../models/item" ;

const insertCar =  async (item: Car ) => {

    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};


const getCars =  async ( ) => {

    const responseInsert = await ItemModel.find();
    return responseInsert;
};

const deleteCar =  async (id: string ) => {
  

    const responseInsert = await ItemModel.findByIdAndDelete(id);
    return responseInsert;
};


const getCar =  async (id : string) => {

    const responseInsert = await ItemModel.findById(id);
    return responseInsert;
};

const updateCar = async ( id : string , item : Car) => {

 const responseUpdate = await ItemModel.findByIdAndUpdate(id , item)
 return responseUpdate

}


export { insertCar, deleteCar, getCars, getCar , updateCar }