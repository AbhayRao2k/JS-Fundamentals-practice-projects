const salesData = [
  { item: "Laptop", quantity: 4, price: 750 },
  { item: "Phone", quantity: 10, price: 300 },
  { item: "Tablet", quantity: 5, price: 450 },
  { item: "Headphones", quantity: 8, price: 50 },
  { item: "Monitor", quantity: 2, price: 200 },
];

// Step 1: Total Sales Revenue
const totalSales = salesData.reduce((total, item)=> {
    const itemRevenue = item.price * item.quantity

    return total + itemRevenue
}, 0)

console.log(totalSales)

// Step 2: Best Selling Item
const bestSellingItem = salesData.reduce((best, current)=> {
    return current.quantity > best.quantity ? current : best;
})

console.log(bestSellingItem)

// Step 3: Detailed Report
const detailedReport = salesData.map((product)=>{
    return {
        item: product.item,
        totalRevenue: product.quantity * product.price
    }
})

console.log(detailedReport)

// Step 4: Display the Report
console.log("Total Sales: ", totalSales)
console.log("Best Selling Item: ", bestSellingItem.item)

console.log("Detailed Report: ")
detailedReport.forEach((item)=> {
    console.log(`- ${item.item}: $${item.totalRevenue}` )
})