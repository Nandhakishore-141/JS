// ATM Simulator

let balance = 1000; // initial balance
let correctPIN = "1234";

// Step 1: Ask user for PIN
let pin = prompt("Enter your PIN:");

// Step 2: Check PIN
if (pin === correctPIN) {
    // Step 3: Show menu using prompt (confirm() is only Yes/No, so prompt is better)
    let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

    if (choice === "1") {
        // Withdraw
        let amount = Number(prompt("Enter amount to withdraw:"));
        if (amount <= balance) {
            balance -= amount;
            alert("Withdrawal successful! New balance: " + balance);
        } else {
            alert("Insufficient balance!");
        }

    } else if (choice === "2") {
        // Deposit
        let amount = Number(prompt("Enter amount to deposit:"));
        balance += amount;
        alert("Deposit successful! New balance: " + balance);

    } else if (choice === "3") {
        // Check Balance
        alert("Your current balance is: " + balance);

    } else {
        alert("Invalid choice!");
    }
} else {
    alert("Incorrect PIN!");
}
