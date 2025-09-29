let score = 0;

// Question 1
let q1 = prompt("Q1: What is 2 + 2?\n1) 3\n2) 4\n3) 5");
switch (q1) {
    case "2":
        score++;
        break;
}

// Question 2
let q2 = prompt("Q2: Which is the capital of France?\n1) Paris\n2) Rome\n3) Berlin");
switch (q2) {
    case "1":
        score++;
        break;
}

// Question 3
let q3 = prompt("Q3: Which is the largest planet?\n1) Earth\n2) Jupiter\n3) Mars");
switch (q3) {
    case "2":
        score++;
        break;
}

// Question 4
let q4 = prompt("Q4: Which language is used for web styling?\n1) HTML\n2) CSS\n3) Python");
switch (q4) {
    case "2":
        score++;
        break;
}

// Question 5
let q5 = prompt("Q5: Who developed JavaScript?\n1) Brendan Eich\n2) Elon Musk\n3) Bill Gates");
switch (q5) {
    case "1":
        score++;
        break;
}

// Show final score
alert("Your Final Score: " + score + "/5");
