import { Request, RequestHandler, Response } from 'express';
import * as itemService from '../services/item.service';
import createLogger from '../utils/logger';

export const createItem = async (req: Request, res: Response) => {
  const logger = await createLogger('createItem');
  try {
    const item = await itemService.createItem(req.body);
    res.status(201).json(item);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error('Error creating item', { message: error.message, stack: error.stack, requestBody: req.body });
      res.status(400).json({ message: error.message });
    } else {
      logger.error('Unknown error occurred while creating item');
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
};

export const getItems = async (req: Request, res: Response) => {
  const logger = await createLogger('getItems');
  try {
    const { search } = req.query;
    const items = await itemService.getItems(search as string);
    res.status(200).json(items);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error('Error fetching items', { message: error.message, stack: error.stack });
      res.status(500).json({ message: 'Error retrieving data from DB' });
    } else {
      logger.error('Unknown error occurred while fetching items');
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
};

export const getItemById = async (req: Request, res: Response) => {
  const logger = await createLogger('getItemById');
  try {
    const itemId = Number(req.params.id);
    const item = await itemService.getItemById(itemId);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error('Error fetching item by ID', { message: error.message, stack: error.stack, id: req.params.id });
      res.status(500).json({ message: error.message });
    } else {
      logger.error('Unknown error occurred while fetching item by ID', { id: req.params.id });
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
};

export const updateItem = async (req: Request, res: Response) => {
  const logger = await createLogger('updateItem');
  try {
    const itemId = Number(req.params.id);
    const updatedItem = await itemService.updateItem(itemId, req.body);
    if (updatedItem) {
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error('Error updating item', { message: error.message, stack: error.stack, id: req.params.id });
      res.status(400).json({ message: error.message });
    } else {
      logger.error('Unknown error occurred while updating item', { id: req.params.id });
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
};

export const deleteItem: RequestHandler = async (req: Request, res: Response): Promise<any> => {
  const logger = await createLogger('deleteItem');
  try {
    const itemId = Number(req.params.id);
    // Check if the item exists first
    const item = await itemService.getItemById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await itemService.deleteItem(itemId);
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error('Error deleting item', { message: error.message, stack: error.stack, id: req.params.id });
      res.status(500).json({ message: error.message });
    } else {
      logger.error('Unknown error occurred while deleting item', { id: req.params.id });
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
};