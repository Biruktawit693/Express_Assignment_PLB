# Express.js Assignment – Product API

## Overview
This project is a RESTful API built with **Express.js** for managing a `products` resource. It implements **CRUD operations**, middleware, and error handling. The API is designed for learning purposes and uses **in-memory storage** for products.

---

## Setup Instructions

1. Make sure **Node.js (v18 or higher)** is installed.
2. Open the project folder in **VS Code**.
3. Install dependencies:

```bash
npm install
Start the server:

bash
Copy code
node server.js
The server runs at:

arduino
Copy code
http://localhost:3000
API Endpoints
GET /api/products
Fetch all products.

Example Response:

json
Copy code
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  },
  {
    "id": "2",
    "name": "Smartphone",
    "description": "Latest model with 128GB storage",
    "price": 800,
    "category": "electronics",
    "inStock": true
  }
]
GET /api/products/:id
Fetch a single product by ID.

Example Response:

json
Copy code
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
POST /api/products
Create a new product.

Example Request:

json
Copy code
{
  "name": "Tablet",
  "description": "High-resolution tablet with stylus",
  "price": 600,
  "category": "electronics",
  "inStock": true
}
Example Response:

json
Copy code
{
  "id": "4",
  "name": "Tablet",
  "description": "High-resolution tablet with stylus",
  "price": 600,
  "category": "electronics",
  "inStock": true
}
PUT /api/products/:id
Update an existing product.

Example Response:

json
Copy code
{
  "id": "4",
  "name": "Tablet",
  "description": "High-resolution tablet with stylus",
  "price": 650,
  "category": "electronics",
  "inStock": true
}
DELETE /api/products/:id
Delete a product.

Example Response:

json
Copy code
{
  "id": "4",
  "name": "Tablet",
  "description": "High-resolution tablet with stylus",
  "price": 650,
  "category": "electronics",
  "inStock": true
}
Middleware
Logger Middleware: logs request method, URL, and timestamp.

Authentication Middleware: checks for API key in headers.

Validation Middleware: ensures product fields are provided for creation/update.

Error Handling Middleware: formats and sends errors with proper HTTP status codes.

Environment Variables
Example .env.example:

env
Copy code
PORT=3000
API_KEY=12345SECRETKEY
Testing
CRUD operations tested using test_routes.js.

All endpoints work as expected.

Data is stored in memory; server restart resets data.

Technologies
Node.js

Express.js

body-parser

uuid

Notes
API runs locally at http://localhost:3000.

Uses in-memory array instead of a database for simplicity.

Demonstrates Express.js routing, middleware, and RESTful API design.

All requests/responses shown here were simulated using test_routes.js due to Postman/PowerShell issues.

