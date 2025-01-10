import { Request, Response } from 'express';
import {
    getMostExpensiveItems,
    getMostOrderedItems,
    getOrdersSummary,
  } from '../services/dashboard.service';

export const getDashboardMetrics = async (req: Request, res: Response): Promise<void> => {
  try {
    const [mostExpensiveItems, mostOrderedItemDetails, ordersSummary] = await Promise.all([
      getMostExpensiveItems(),
      getMostOrderedItems(),
      getOrdersSummary(),
    ]);

    res.json({
      mostExpensiveItems,
      mostOrderItems: mostOrderedItemDetails,
      ordersSummary,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving dashboard metrics' });
  }
};
