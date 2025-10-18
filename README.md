# Express.js Assignment – Product API

## Setup Instructions
1. Make sure Node.js is installed (v18+ recommended).
2. Open the project folder in VS Code.
3. Install dependencies:
   ```bash
   npm install
# Start the server:

bash
Copy code
node server.js
Server runs at http://localhost:3000.

API Endpoints
GET /api/products
List all products.

Example Response:

json
[
  { "id": "1", "name": "Laptop", "description": "...", "price": 1200, "category": "electronics", "inStock": true },
  { "id": "2", "name": "Smartphone", "description": "...", "price": 800, "category": "electronics", "inStock": true }
]
POST /api/products
Create a new product.

Example Request (simulated in test_routes.js):

json
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

Example Response (simulated):

json
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

Example Response (simulated):

json
{
  "id": "4",
  "name": "Tablet",
  "description": "High-resolution tablet with stylus",
  "price": 650,
  "category": "electronics",
  "inStock": true
}
Notes
CRUD operations were tested using test_routes.js due to PowerShell and Postman issues.

All endpoints are implemented and working as expected.

The server uses in-memory storage (products array).
