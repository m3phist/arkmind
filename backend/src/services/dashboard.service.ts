import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMostExpensiveItems = async () => {
  return prisma.items.findMany({
    take: 5,
    orderBy: {
      price: 'desc',
    },
  });
};

export const getMostOrderedItems = async () => {
  const mostOrderItems = await prisma.orders.groupBy({
    by: ['itemId'],
    _sum: {
      quantity: true,
    },
    orderBy: {
      _sum: {
        quantity: 'desc',
      },
    },
    take: 5,
  });

  return Promise.all(
    mostOrderItems.map(async (order) => {
      const item = await prisma.items.findUnique({
        where: { id: order.itemId },
        select: {
          id: true,
          name: true,
          price: true,
        },
      });
      return {
        itemId: item?.id,
        name: item?.name,
        quantity: order._sum.quantity,
      };
    })
  );
};

export const getOrdersSummary = async () => {
  return prisma.ordersSummary.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
  });
};
