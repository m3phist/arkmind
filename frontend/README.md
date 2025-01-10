# Items Management Frontend

## Objective

This is the frontend part of a full-stack application for managing "items." It is built using Next.js with Redux Toolkit to handle state management. The backend API is developed with Express.js and TypeScript and integrates with a MySQL database.

## Features

- **Create Item**: A form to add a new item to the inventory.
- **View All Items**: A table displaying all items with details like name, description, and price.
- **Edit Item**: A form pre-filled with an item's details, allowing updates.
- **Delete Item**: A button to delete an item with a confirmation prompt.

- **Dashboard Metrics**: Display key metrics using custom components:
  - `CardMostExpensiveItems`: Shows the most expensive items.
  - `CardMostOrderedItems`: Displays the most ordered items.
  - `CardOrdersSummary`: Provides a summary of orders.

## Technologies Used

- **Next.js**: For building the user interface.
- **Redux Toolkit**: For managing the global state of the application.
- **Axios**: For making HTTP requests to the backend API.
- **TailwindCSS**: For styling and responsive design.
- **Material UI**: Offers a rich set of pre-designed components that follow Google's Material Design principles, enhancing the user interface and user experience.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/m3phist/arkmind.git
    ```

2. Navigate to the project directory:

    ```bash
    cd frontend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

   The application will be available at `http://localhost:3000`.

### API Integration

The frontend interacts with the following backend API endpoints:

- `POST /api/items` - Create a new item.
- `GET /api/items` - Retrieve all items.
- `GET /api/items/:id` - Retrieve an item by ID.
- `PUT /api/items/:id` - Update an item by ID.
- `DELETE /api/items/:id` - Delete an item by ID.

- `GET /api/dashboard` - Retrieve all dashboard metrics.

### State Management

- **Redux Toolkit**: Used for handling the state of items throughout the application, ensuring seamless data flow between components.

### UI/UX

- **TailwindCSS**: Provides a modern, responsive design.

## Folder Structure

```plaintext
items-management-frontend/
├── src/
│   ├── app/
│   │   ├── (components)/
│   │   │   ├── Header
│   │   │   ├── Navbar
│   │   │   └── Sidebar
│   │   ├── dashboard/
│   │   │   └── (dashboard files)
│   │   ├── items/
│   │   │   └── (items files)
│   │   └── settings/
│   │       └── (settings files)
│   ├── lib/
│   │   └── (validation files)
│   ├── state/
│       └── (Redux slices and store configuration)
│   
├── public/
│   └── index.html
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.ts
