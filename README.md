# Express.js Assignment – Product API

## Overview
This project is a RESTful API built with **Express.js** for managing a `products` resource. It implements **CRUD operations**, middleware, and error handling.

---

## 🛠️ Setup Instructions

1. Make sure **Node.js (v18 or higher)** is installed.
2. Open the project folder in **VS Code**.
3. Install all dependencies:

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
🚀 API Endpoints
1. GET /api/products
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
2. GET /api/products/:id
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
3. POST /api/products
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
4. PUT /api/products/:id
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
5. DELETE /api/products/:id
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
🧩 Middleware
Logger Middleware: Logs request method, URL, and timestamp.

Authentication Middleware: Checks for an API key in headers.

Validation Middleware: Ensures product fields are provided.

Error Handling Middleware: Formats and sends errors with HTTP status codes.

⚙️ Environment Variables
Example .env.example:

ini
Copy code
PORT=3000
API_KEY=12345SECRETKEY
🧪 Testing
CRUD operations tested via test_routes.js script.

All routes work correctly and return expected responses.

Data stored in memory resets on server restart.

📦 Technologies
Node.js

Express.js

body-parser

uuid

📝 Notes
API runs locally on http://localhost:3000.

No database is required; in-memory array is used.

Demonstrates Express.js routing, middleware, and RESTful API design.
