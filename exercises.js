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