// 1. Global object to store student info
let studentInfo = {};

// --- 1 & 6: Profile & JSON (Validation, Object, JSON.stringify) ---
function saveProfile() {
    const name = document.getElementById('name').value.trim();
    const birthYearInput = document.getElementById('birthYear').value.trim();
    const city = document.getElementById('city').value.trim();
    const errorDisplay = document.getElementById('profileError');

    errorDisplay.textContent = ''; // Clear previous error

    // Handle errors (empty fields)
    if (!name || !birthYearInput || !city) {
        errorDisplay.textContent = 'ERROR: Please fill in all profile fields.';
        return;
    }

    const birthYear = parseInt(birthYearInput);
    const currentYear = new Date().getFullYear();

    // Handle errors (invalid birth year)
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
        errorDisplay.textContent = 'ERROR: Invalid Birth Year.';
        return;
    }

    // Store info in the object
    studentInfo = {
        name: name,
        birthYear: birthYear,
        city: city
    };

    // View info stored in JSON format
    document.getElementById('jsonDisplay').textContent = JSON.stringify(studentInfo, null, 2);
    
    // Automatically call the age checker
    calculateAgeAndEligibility(birthYear);
}

// --- 2: Calculate Age & Eligibility (Date(), If-Else) ---
function calculateAgeAndEligibility(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const isEligible = age >= 18;

    document.getElementById('ageDisplay').textContent = age;
    document.getElementById('eligibilityDisplay').textContent = isEligible ? 'Yes (Eligible)' : 'No (Under 18)';
}

// --- 3: Personalized Greeting (Date(), Strings) ---
function displayGreeting() {
    const hour = new Date().getHours();
    let timeOfDay;

    if (hour < 12) {
        timeOfDay = 'Good Morning';
    } else if (hour < 18) {
        timeOfDay = 'Good Afternoon';
    } else {
        timeOfDay = 'Good Evening';
    }

    // Use stored name or a default
    const name = studentInfo.name ? studentInfo.name.split(' ')[0] : 'friend';

    const message = `${timeOfDay}, ${name}! You're doing great.`;
    document.getElementById('greetingDisplay').textContent = message;
}

// --- 4 & 7: Basic Math Operations (try-catch, Numbers) ---
function calculate() {
    const num1Input = document.getElementById('num1').value.trim();
    const num2Input = document.getElementById('num2').value.trim();
    const operation = document.getElementById('operation').value;
    const resultDisplay = document.getElementById('calcResult');
    const errorDisplay = document.getElementById('calcError');

    resultDisplay.textContent = '--';
    errorDisplay.textContent = ''; // Clear previous error

    // Use try-catch for graceful error handling
    try {
        const num1 = parseFloat(num1Input);
        const num2 = parseFloat(num2Input);

        // Input validation
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Enter valid numbers for calculation.');
        }

        let result;
        switch (operation) {
            case 'add': result = num1 + num2; break;
            case 'subtract': result = num1 - num2; break;
            case 'multiply': result = num1 * num2; break;
            case 'divide':
                if (num2 === 0) {
                    throw new Error('Cannot divide by zero!');
                }
                result = num1 / num2;
                break;
        }

        resultDisplay.textContent = result.toFixed(2); // Show result, rounded to 2 decimals

    } catch (e) {
        errorDisplay.textContent = `CALC ERROR: ${e.message}`;
    }
}

// --- 5: Random Motivational Quote (Strings) ---
function displayQuote() {
    const quotes = [
        "The best way to predict the future is to create it.",
        "Strive not to be a success, but rather to be of value.",
        "The mind is everything. What you think you become.",
        "You miss 100% of the shots you don't take.",
        "Don't watch the clock; do what it does. Keep going."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
}