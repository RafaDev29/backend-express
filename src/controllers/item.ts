import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {


    } catch (e) {
        handleHttp(res, 'error items')
    }

}

const getItems = (req: Request, res: Response) => {

}

const postItem = ({ body }: Request, res: Response) => {
    try {
        res.send(body);
    } catch (e) {
       handleHttp(res , "error al crear")

    }
}

const updateItem = (req: Request, res: Response) => {

}

const deleteItem = (req: Request, res: Response) => {

}


export { getItem, getItems, updateItem, postItem, deleteItem }