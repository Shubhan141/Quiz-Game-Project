// Now we have the multi object
const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

let index = 0;
let QuestionScore = 0;

// Accessing the reference of the elements
const queEle = document.querySelector('#question');
const optnEle = document.querySelector('#options');
const nextBtn = document.querySelector('#next');
nextBtn.textContent = 'Next';
const scoreEle = document.querySelector('#score');
const revisitBtn=document.querySelector('#revisit');
revisitBtn.textContent='Revisit'
scoreEle.after(revisitBtn); // insert the revisit btn to the end of the web

// Display the first question when the page loads
disPlayQuestion();
// Add click event listener to the Next button
nextBtn.addEventListener('click', () => {
  nextQuestoin();
});

// Function to display the current question
function disPlayQuestion() {
  // Retrieve question details from the quesJSON array based on the current index
  const { correctAnswer, options, question } = quesJSON[index];

  // Display the current question
  queEle.textContent = ` Question-${index+1}: ${question}`;

  // Clear the options element before displaying new options
  optnEle.textContent = '';

  // Shuffle the options and create buttons for each option
  const shuffeledoptions = shuffeledArrEle(options);
  shuffeledoptions.forEach((curOption) => {
    // Create a button for the current option
    const btnEle = document.createElement('button');
    btnEle.textContent = curOption;


    // Append the button to the options element
    optnEle.appendChild(btnEle);

    // Add click event listener to each button
    btnEle.addEventListener('click', () => {
      btnEle.style.background='rgb(144,238,144)';
      // If the clicked button's text matches the correct answer, increase the score
      if (curOption.trim() === correctAnswer) {
        QuestionScore++;
      } else {
        QuestionScore = QuestionScore - 0.25;
      }
    });
  });
}

// Function to display the next question
function nextQuestoin() {
  // Increment the index to move to the next question
  index++;

  // Clear the options element before displaying new options
  optnEle.textContent = '';

  // Check if all questions have been displayed
  if (index >= quesJSON.length) {
    // Display quiz completion message and score
    queEle.textContent = 'Quiz has Been Completed';
    scoreEle.textContent = `Final Score: ${QuestionScore}`;
    nextBtn.style.display = 'none'; // Hide the Next button
    revisitBtn.style.display= 'inline-block';
    // display none do not occupied the space  because we wrtie the display none then remove the elemet from the html page and nothing shown its palce
  } else {
    // Display the next question
    disPlayQuestion();
  }
}

// Function to shuffle the options array
function shuffeledArrEle(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
 let bool =true;
revisitBtn.addEventListener( 'click', ()=>{
        index=0;
        if(bool === true){
          QuestionScore=0; // revisit time initial score should be 0
          scoreEle.style.display = 'none'; // after click over the revisit btn  shoud be removed
          nextBtn.style.display = 'inline-block'; // Hide the Next button
          revisitBtn.style.display= 'none';
        }
        index=index-1;
        // console.log(index);  for the debugging
        nextQuestoin();

})



