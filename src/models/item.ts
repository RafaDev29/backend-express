import { Schema, Types, model, Model } from "mongoose"
import { Car } from "../interface/car.interface";

const ItemSchema = new Schema<Car>(
    {
       color : { 
        type : String,
       },
       gas : {
        type : String,
        enum : ["gasolina", "electric"]
       },
       year : {
        type : Number
       },
       description : {
        type : String
       },
       price : {
        type : Number
       }
    },
    {

        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model( "items" , ItemSchema)

export default ItemModel;