import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router  = Router();


router.get("/:id" , getItem)
router.post("/" , postItem)
router.get("/" , getItems)
router.delete("/:id" , deleteItem)
router.put("/:id" , updateItem)


export {router}