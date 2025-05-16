import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertItem } from "../services/item"

const getItem = (req: Request, res: Response) => {
    try {


    } catch (e) {
        handleHttp(res, 'error items')
    }

}

const getItems = (req: Request, res: Response) => {

}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertItem(body)
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "error al crear")

    }
}

const updateItem = (req: Request, res: Response) => {

}

const deleteItem = (req: Request, res: Response) => {

}


export { getItem, getItems, updateItem, postItem, deleteItem }