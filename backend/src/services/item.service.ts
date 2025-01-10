import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createItem = async (data: { name: string; description?: string; price: number }) => {
  return prisma.items.create({ data });
};

export const getItems = async (search?: string) => {
  return prisma.items.findMany({
    where: search
      ? {
          name: {
            contains: search,
          },
        }
      : undefined,
  });
};

export const getItemById = async (id: number) => {
  return prisma.items.findUnique({ where: { id } });
};

export const updateItem = async (id: number, data: { name?: string; description?: string; price?: number }) => {
  return prisma.items.update({ where: { id }, data });
};

export const deleteItem = async (id: number) => {
  const item = await prisma.items.delete({
    where: { id },
  });
  return item ? true : false; // Return boolean indicating success
};

