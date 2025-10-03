// Registration
document.getElementById('registerBtn').addEventListener('click', () => {
  try {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = parseInt(document.getElementById('age').value);

    if (!name || !email) {
      throw new Error("Invalid input: Fill all fields");
    }
    if ( isNaN(age) || age < 12) {
      throw new Error("age should be greater than 11");
    }

    document.getElementById('registration').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    generateQuiz();
  } catch (err) {
    document.getElementById('error').innerText = err.message;
  }
});

// Generate random quiz
function generateQuiz() {
  const quizForm = document.getElementById('quizForm');
  quizForm.innerHTML = "";

  const questions = [
    {q: "2 + 2 = ?", options: ["3","4","5"], correct: "4"},
    {q: "5 * 3 = ?", options: ["15","10","20"], correct: "15"},
    {q: "10 - 7 = ?", options: ["2","3","5"], correct: "3"},
    {q: "6 / 2 = ?", options: ["2","3","4"], correct: "3"},
    {q: "7 + 8 = ?", options: ["14","15","16"], correct: "15"}
  ];

  // pick 3 random
  let selected = questions.sort(() => 0.5 - Math.random()).slice(0,3);

  selected.forEach((item,i) => {
    let div = document.createElement('div');
    div.innerHTML = `<p><b>Q${i+1}:</b> ${item.q}</p>` + 
      item.options.map(opt => 
        `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`
      ).join("<br>");
    quizForm.appendChild(div);
  });

  quizForm.dataset.correct = JSON.stringify(selected.map(q => q.correct));
}

// Submit quiz
document.getElementById('submitQuiz').addEventListener('click', () => {
  document.getElementById('results').style.display = 'block';
  document.getElementById('summary').innerText = "Calculating result...";

  new Promise((resolve) => {
    setTimeout(() => {
      resolve(checkAnswers());
    }, 2000); 
  }).then(result => {
    displayResults(result);
  });
});

function checkAnswers() {
  const correctAnswers = JSON.parse(document.getElementById('quizForm').dataset.correct);
  let score = 0;

  correctAnswers.forEach((ans,i) => {
    let chosen = document.querySelector(`input[name="q${i}"]:checked`);
    if (chosen && chosen.value === ans) score++;
  });

  let percentage = (score / correctAnswers.length) * 100;
  let grade;
  if (percentage >= 80) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";
  else grade = "D";

  return {
    score,
    total: correctAnswers.length,
    percentage,
    grade,
    timestamp: new Date().toLocaleString()
  };
}

function displayResults(result) {
  const summary = `
    Total Marks: ${result.score}/${result.total}
    Percentage: ${result.percentage.toFixed(2)}%
    Grade: ${result.grade}
    Timestamp: ${result.timestamp}
  `;
  document.getElementById('summary').innerText = summary;

  let userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value,
    result
  };

  document.getElementById('jsonOutput').innerText = JSON.stringify(userData, null, 2);
}
