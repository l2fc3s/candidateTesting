
const input = require('readline-sync');

//collects candidate name
let candidate = input.question('Candidate name: ');
//console.log(candidate);

//array stores questions
let quizQuestion = [
  '1) True or false: 5000 meters = 5 kilometers. ',
  '2) (5 + 3)/2 * 10 = ? ',
  '3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ' ,
  '4) Who was the first American woman in space? ',
  '5) What is the minimum crew size for the International Space Station (ISS)? '
  ];
let candidateAnswer = [];
let answer = ["true", "40", "Trajectory", "Sally Ride", "3"];

//loops through questions and stores answers
let yourAnswer = '';
for(i=0; i < quizQuestion.length; i++) {
  yourAnswer = candidateAnswer.push(input.question(quizQuestion[i]));
  console.log(`Your answer: ${candidateAnswer[i]}`);
  console.log(`Correct answer: ${answer[i]}`);
  console.log('');
}

//converts strings to uppercase for case insensitive comparison
candidateAnswer = String(candidateAnswer).toUpperCase().split(',');
answer = String(answer).toUpperCase().split(',');
//console.log(candidateAnswer);
//console.log(answer);


// tallys up correct/incorrect answers and stores in variable
let correct = 0;
let incorrect = 0;

for(i = 0; i < answer.length; i++) {
  if(candidateAnswer[i] === answer[i]) {
    correct += 1;
  } else incorrect += 1;
} 
//console.log(correct);
//console.log(incorrect);


// calculates final score and prints feedback
let testScore = (correct / quizQuestion.length) * 100;
//console.log(testScore);

if (testScore > 60) {
  console.log(`>>> Overall Grade: ${testScore}% (${correct} of 5 responses correct) <<<`);
  console.log(`>>> Status: PASSED <<<`);
} else {
  console.log(`>>> Overall Grade: ${testScore}% (${correct} of 5 responses correct) <<<`);
  console.log(`>>> Status: FAILED <<<`);
}






