const inventory = [
  { name: "Laptop", price: 1000, stock: 5, category: "Electronics" },
  { name: "Phone", price: 700, stock: 10, category: "Electronics" },
  { name: "Shirt", price: 30, stock: 0, category: "Clothing" },
  { name: "Shoes", price: 50, stock: 15, category: "Clothing" },
];

// Calculate Total Inventory Value
const totalValue = () => {
  const total = inventory.reduce(
    (acc, item) => acc + item.price * item.stock,
    0
  );
  return total;
};

console.log(totalValue());

// Filter Out-of-Stock Products
const outOfStock = () => {
  const result = inventory.filter((item)=> item.stock === 0)
  result.forEach((item)=>{
    console.log(`${item.name} is out of stock`)
  })
  return result
}

console.log(outOfStock())

// Group Products by Category
const groupByCategories = () => {
  return inventory.reduce((grouped, product)=> {
    const category = product.category

    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(product)
    return grouped;
  }, {})
}

console.log(groupByCategories())