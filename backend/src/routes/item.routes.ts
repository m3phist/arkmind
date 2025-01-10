import { Router } from "express";
import * as itemController from '../controllers/item.controller';
import { validateRequest } from '../middleware/validation.middleware';
import { createItemSchema, updateItemSchema } from '../validators/item.validator';

const router = Router();

// Use validation middleware to validate the body before calling the controller
router.post('/', validateRequest(createItemSchema), itemController.createItem);
router.get('/', itemController.getItems);
router.get('/:id', itemController.getItemById);
router.put('/:id', validateRequest(updateItemSchema), itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

export default router;
