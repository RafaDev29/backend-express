import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { deleteCar, getCars, insertCar , getCar } from "../services/item"

const getItem = async ({params}: Request, res: Response) => {
    const {id} = params
   try {
        const response= await getCar(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, "error al crear", e)
    }

}

const getItems = async (req: Request, res: Response) => {
    try {
        const responseItem = await getCars()
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, "error al crear", e)
    }

}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "error al crear", e)

    }
}

const updateItem = (req: Request, res: Response) => {
 
}

const deleteItem = async ({params}: Request, res: Response) => {
    const { id } = params
    try {
        const responseItem = await deleteCar(id)
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "error al crear", e)

    }


}


export { getItem, getItems, updateItem, postItem, deleteItem }