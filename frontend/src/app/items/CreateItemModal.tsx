import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { itemFormSchema } from "@/lib/validationSchemas/itemFormSchema";

type ItemFormData = {
  name: string;
  price: number;
  description?: string;
};

type CreateItemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ItemFormData) => void;
};

const CreateItemModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateItemModalProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ItemFormData>({
    resolver: zodResolver(itemFormSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
    },
  });

  const onSubmit = (data: ItemFormData) => {
    const updatedData = {
      ...data,
      price: Number(data.price),
    };
    onCreate(updatedData);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          {/* ITEM NAME */}
          <label htmlFor="name" className={labelCssStyles}>
            Name
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input {...field} placeholder="Name" className={inputCssStyles} />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          {/* PRICE */}
          <label htmlFor="price" className={labelCssStyles}>
            Price
          </label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                placeholder="Price"
                className={inputCssStyles}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}

          {/* DESCRIPTION */}
          <label htmlFor="description" className={labelCssStyles}>
            Description
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Description"
                className={inputCssStyles}
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}

          {/* CREATE ACTIONS */}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Create
          </button>
          <button
            onClick={() => {
              onClose();
              reset(); // Reset the form when canceling
            }}
            type="button"
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateItemModal;
