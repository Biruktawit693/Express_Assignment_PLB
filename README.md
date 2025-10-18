Express.js Assignment – Product API
Overview

This project is a RESTful API built with Express.js for managing a products resource. It implements CRUD operations, middleware, and error handling.

🛠️ Setup Instructions

Make sure Node.js (v18 or higher) is installed.

Open the project folder in VS Code.

Install all dependencies:

npm install


Start the server:

node server.js


The server runs at:

http://localhost:3000

🚀 API Endpoints
1. GET /api/products

Fetch all products.
Example Response:

[
  { "id": "1", "name": "Laptop", "description": "High-performance laptop with 16GB RAM", "price": 1200, "category": "electronics", "inStock": true },
  { "id": "2", "name": "Smartphone", "description": "Latest model with 128GB storage", "price": 800, "category": "electronics", "inStock": true }
]

2. GET /api/products/:id

Fetch a single product by ID.
Example Response:

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

{
  "name": "Tablet",
  "description": "High-resolution tablet with stylus",
  "price": 600,
  "category": "electronics",
  "inStock": true
}


Example Response:

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
