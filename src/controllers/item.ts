import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertItem ,listItems } from "../services/item"

const getItem = (req: Request, res: Response) => {
    try {


    } catch (e) {
        handleHttp(res, 'error items')
    }

}

const getItems =  async (req: Request, res: Response) => {
    try{
        const responseItem = await listItems()
        res.send(responseItem)
    }catch{

    }

}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertItem(body)
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "error al crear", e)

    }
}

const updateItem = (req: Request, res: Response) => {

}

const deleteItem = (req: Request, res: Response) => {

}


export { getItem, getItems, updateItem, postItem, deleteItem }