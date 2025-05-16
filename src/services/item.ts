

import { Car } from "../interface/car.interface";
import ItemModel from "../models/item" ;

const insertItem =  async (item: Car ) => {

    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};


const listItems =  async ( ) => {

    const responseInsert = await ItemModel.find();
    return responseInsert;
};



export { insertItem , listItems}