// --- Task 3: Simple Personal Budget Planner ---

// 1. Get Monthly Income and convert to a number
let income = +prompt("Enter your Monthly Income (e.g., 5000):");

// 2. Get Expenses for multiple categories and convert them to numbers
let rent = +prompt("Enter your Rent expense (e.g., 2000):");
let groceries = +prompt("Enter your Groceries expense (e.g., 1500):");
let transport = +prompt("Enter your Transport expense (e.g., 1000):");

// 3. Math functions: Add expenses to get total expense
let totalExpenses = rent + groceries + transport;

// Calculate remaining balance and percentage spent
let remainingBalance = income - totalExpenses;
let percentageSpent = (totalExpenses / income) * 100;

// 4. If-Else: Check if total expenses exceed income
let message;
if (totalExpenses > income) {
    message = "Message: You are overspending. 🚨";
} else {
    message = "Message: You are within budget. ✅";
}

// 5. Alert: Display all results
let output = `
    --- Budget Planner Output ---

    Total Expenses: $${totalExpenses.toFixed(2)}
    Remaining Balance: $${remainingBalance.toFixed(2)}
    Percentage Spent: ${percentageSpent.toFixed(2)}%

    ${message}
`;

alert(output);