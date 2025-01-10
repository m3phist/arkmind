"use client";

import {
  useCreateItemMutation,
  useGetItemsQuery,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef, GridFilterModel } from "@mui/x-data-grid";
import { useState } from "react";
import { Pencil, PlusCircleIcon, Trash2 } from "lucide-react";
import CreateItemModal from "./CreateItemModal";
import EditItemModal from "./EditItemModal";

type ItemFormData = {
  id?: number;
  name: string;
  price: number;
  description?: string;
};

const Items = () => {
  const { data: items, isError, isLoading } = useGetItemsQuery();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemFormData | null>(null);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete confirmation modal
  const [itemToDelete, setItemToDelete] = useState<ItemFormData | null>(null); // Item to be deleted

  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  const handleCreateItem = async (itemData: ItemFormData) => {
    const description = itemData.description ?? "";
    await createItem({ ...itemData, description });
  };

  const handleEditItem = async (itemData: ItemFormData) => {
    if (selectedItem?.id) {
      await updateItem({ id: selectedItem.id, updatedItem: itemData });
    }
  };

  const handleDeleteItem = async () => {
    if (itemToDelete?.id) {
      await deleteItem(itemToDelete.id);
      setIsDeleteModalOpen(false); // Close the modal after deletion
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200, filterable: true },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      type: "number",
      valueGetter: (value, row) => `$${row.price}`,
    },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      filterable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <div className="flex space-x-1">
          <button
            onClick={() => {
              setSelectedItem({
                id: params.row.id,
                name: params.row.name,
                price: params.row.price,
                description: params.row.description,
              });
              setIsEditModalOpen(true); // Open the edit modal on click
            }}
            className="flex items-center justify-center p-3 text-yellow-500 hover:text-yellow-700"
          >
            <Pencil className="w-5 h-5 text-gray-400 hover:scale-110 hover:text-yellow-500 transition-transform duration-300 ease-in-out" />
          </button>
          <button
            onClick={() => {
              setItemToDelete({
                id: params.row.id,
                name: params.row.name,
                price: params.row.price,
                description: params.row.description,
              });
              setIsDeleteModalOpen(true); // Open the delete confirmation modal
            }} // Pass the selected item to be deleted
            className="flex items-center justify-center p-3 text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-5 h-5 text-red-300 hover:scale-110 hover:text-red-700 transition-transform duration-300 ease-in-out" />
          </button>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !items) {
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch items</div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <Header name="Items" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Create Item
        </button>
      </div>
      <DataGrid
        rows={items}
        columns={columns}
        getRowId={(row) => row.id}
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
      />

      {/* Create Item Modal */}
      <CreateItemModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateItem}
      />

      {/* Edit Item Modal */}
      {selectedItem && (
        <EditItemModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleEditItem}
          itemData={selectedItem}
        />
      )}

      {/* Confirmation Delete Modal */}
      {isDeleteModalOpen && itemToDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Are you sure you want to delete this item?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={() => setIsDeleteModalOpen(false)} // Close modal on cancel
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteItem} // Confirm deletion
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
