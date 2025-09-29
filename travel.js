/**
 * Task 4: Simple Travel Fare Calculator
 */

// 1. Get Distance and convert to number
let distance = +prompt("Enter the travel distance in km (e.g., 50):");

// 2. Get Transport Type and convert to lowercase for easy checking
let type = prompt("Enter the transport type (Train, Bus, or Taxi):").toLowerCase();

// Initialize fare per km
let farePerKm;

// 3. Switch statement: Set fare per km based on transport type
switch (type) {
    case 'train':
        farePerKm = 5; // Example: $5 per km
        break;
    case 'bus':
        farePerKm = 3; // Example: $3 per km
        break;
    case 'taxi':
        farePerKm = 10; // Example: $10 per km
        break;
    default:
        // Handle unrecognized input
        farePerKm = 0;
        alert(`Error: Transport type "${type}" is unknown. Cannot calculate fare.`);
}

// 4. Math functions: Calculate total fare only if a valid fare was set
let totalFare = 0;
if (farePerKm > 0 && distance > 0) {
    totalFare = distance * farePerKm;
}

// 5. Alert: Show the total fare
if (totalFare > 0) {
    alert(`
        --- Total Fare ---
        Distance: ${distance} km
        Transport Type: ${type.toUpperCase()}
        Total Fare: $${totalFare.toFixed(2)}
    `);
}