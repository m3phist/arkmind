# Backend API for Item Management

## Overview

This backend API is designed for managing items and is built using **Node.js**, **Express**, **Prisma ORM**, and **Zod** for validation. The API interfaces with a **MySQL** database to perform CRUD (Create, Read, Update, Delete) operations on items.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime environment.
- **Express**: Lightweight web application framework for building RESTful APIs.
- **MySQL**: Relational database management system for persistent data storage.
- **Prisma ORM**: Type-safe ORM that simplifies database access with auto-generated queries.
- **Zod**: Schema validation library for request validation to ensure data integrity.

## Features

- **Create Item**: Allows adding new items to the database.
- **Get All Items**: Fetches a list of all available items.
- **Get Item by ID**: Retrieves the details of a specific item by its ID.
- **Update Item**: Enables modifying an existing item's details.
- **Delete Item**: Facilitates the removal of an item from the database.

## Database Schema

The `items` table schema includes the following fields:

- `id`: Primary key, auto-increment.
- `name`: String, required, maximum length of 100 characters.
- `description`: String, optional, maximum length of 500 characters.
- `price`: Decimal, required, must be a positive value.
- `createdAt`: Timestamp, defaults to the current timestamp.
- `updatedAt`: Timestamp, updates on modification.

## API Endpoints

- **POST** `/api/items`: Creates a new item.
- **GET** `/api/items`: Retrieves all items.
- **GET** `/api/items/:id`: Fetches an item by ID.
- **PUT** `/api/items/:id`: Updates an item by ID.
- **DELETE** `/api/items/:id`: Deletes an item by ID.

- **GET** `/api/dashboard`: Retrieves dashboard metrics.

## Validation

**Zod** is employed for validating the request data to ensure compliance with the defined schemas before any processing.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/backend-api.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd backend
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Configure the database**:
   - Create a MySQL database.
   - Update the `.env` file with your database credentials.

5. **Initialize Prisma**:
    ```bash
    npx prisma migrate init
    ```

6. **Generate Prisma client**:
    ```bash
    npx prisma generate
    ```

7. **Run database migrations**:
    ```bash
    npx prisma migrate dev --name init
    ```

8. **Start the development server**:
    ```bash
    npm run dev
    ```

The server will start and be available at `http://localhost:3000`.

## Prisma

Prisma ORM is used to handle interactions with the MySQL database, offering a type-safe and efficient API for database operations.

## Known Issues

- No known issues at the moment.

## Future Enhancements

- Implement user authentication and authorization.
- Add pagination to the `GET /api/items` endpoint.
- Enhance search and filtering capabilities.
