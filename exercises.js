const newUsers = [
  { id: 101, email: "alex@gmail.com", isVerified: true },
  { id: 102, email: "maria@yahoo.com", isVerified: false },
  { id: 103, email: "john@outlook.com", isVerified: true }
];

function generateWelcomeEmails(users) {
  users.forEach((user) => {
    if (user.isVerified) {
      console.log(`Welcome, ${user.email}!`);
    }
  });
}
    generateWelcomeEmails(newUsers);

/* or using filter and map

    const newUser = [
  { id: 101, email: "alex@gmail.com", isVerified: true },
  { id: 102, email: "maria@yahoo.com", isVerified: false },
  { id: 103, email: "john@outlook.com", isVerified: true }
];

function generateWelcomeEmails(users) {
    if (users.isVerified) {
        console.log(`Welcome, ${users.email}!`);
    }
}
console.log(newUser.filter(user => user.isVerified).map(user => `Welcome, ${user.email}!`));
*/

//Transaction Checks (find, some, every methods)

const transactions = [
  { id: "tx-1", amount: 120, status: "completed" },
  { id: "tx-2", amount: 4500, status: "pending" },
  { id: "tx-3", amount: -50, status: "completed" },
  { id: "tx-4", amount: 300, status: "completed" }
];

// pending
function findPendingTransaction(transactions) {
  return transactions.find(tx => tx.status === "pending");
} 

console.log(findPendingTransaction(transactions) );

//amount less than 0
function hasSuspiciousActivity(transactions) {
    return transactions.some(tx => tx.amount < 0);
}

console.log(hasSuspiciousActivity(transactions));

// amount greater than 0

function isAccountHealthy(transactions){
  return transactions.every(tx => tx.amount > 0 && tx.status === "completed");
}

console.log(isAccountHealthy(transactions));

// Task 3

const inventory = [
  { sku: "A1", name: "Mechanical Keyboard", price: 120, discount: 0.1 }, // 10% off
  { sku: "B2", name: "Wireless Mouse", price: 50, discount: 0 },         // No discount
  { sku: "C3", name: "4K Monitor", price: 400, discount: 0.15 }          // 15% off
];

function calculateFinalPrices(items) {
  return items.map(item => ({
    sku: item.sku,
    name: item.name,
    finalPrice: item.price * (1 - item.discount)
  }));
}

console.log(calculateFinalPrices(inventory));

// Task 4: Get Top Active Clients (filter + sort)

const clients = [
  { name: "TechCorp", totalSpent: 15000, isActive: true },
  { name: "BioLab", totalSpent: 4200, isActive: true },
  { name: "GlobalLogistics", totalSpent: 28000, isActive: false },
  { name: "FinTech Ltd", totalSpent: 9500, isActive: true }
];

// Option A

function getVIPClients(clients, minSpent) {
  return clients
    .filter(client => client.isActive && client.totalSpent >= minSpent)
    .sort((a, b) => b.totalSpent - a.totalSpent);
}

console.log(getVIPClients(clients, 10000));

// Option B - no idea

function getVIPClients(clients, minSpent){
  const result = [];
  for (const client of clients){
    if (client.isActive && client.totalSpent >= minSpent){
result.push(client);
    }}; //for (sdg of tmp) {....}
    return result;
  }

console.log(getVIPClients(clients, 10000));

//Task 5 Calculate Cart Total (reduce)

const cart = [
  { title: "Design Patterns Book", price: 45, quantity: 2 },
  { title: "USB-C Cable", price: 12, quantity: 3 },
  { title: "Ergonomic Chair", price: 250, quantity: 1 }
];
 
// forEach - not working properly
function calculateCartTotal(cartItems){
  cartItems.forEach(item => {
    total = item.price * item.quantity;
  });
 return total;
};

console.log(calculateCartTotal(cart));

// Task 6, Group Titles by Category (reduce)

const articles = [
  { id: 1, title: "JS ES6 Features", category: "development" },
  { id: 2, title: "UI Design Fundamentals", category: "design" },
  { id: 3, title: "Async/Await Deep Dive", category: "development" }
];

function groupByCategory(articles) {
  return articles.reduce((map, article) => {
    const category = article.category;
    map[category] = map[category] || [];
    map[category].push(article.title);
    return map;
  }, {});
}
console.log(groupByCategory(articles));
