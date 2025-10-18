const { products } = require('./server'); // now products is imported

// Simulate creating a new product
const newProduct = {
  id: '4',
  name: 'Tablet',
  description: 'High-resolution tablet with stylus',
  price: 600,
  category: 'electronics',
  inStock: true
};
products.push(newProduct);
console.log('POST Response:', newProduct);

// List all products
console.log('GET Response:', products);

// Update a product
const productToUpdate = products.find(p => p.id === '4');
if (productToUpdate) {
  productToUpdate.price = 650;
  console.log('PUT Response:', productToUpdate);
}

// Delete a product
const indexToDelete = products.findIndex(p => p.id === '4');
if (indexToDelete !== -1) {
  const deleted = products.splice(indexToDelete, 1);
  console.log('DELETE Response:', deleted[0]);
}

