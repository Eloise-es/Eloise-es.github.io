// Quiz Questions Database - Updated with your definitive rules
const quizQuestions = [
    {
        question: "What is the ideal team size?",
        options: ["4-8 players per team", "6-15 players per team", "10-20 players per team", "Any number"],
        correct: 1
    },
    {
        question: "What's the maximum number of players on the field at one time?",
        options: ["6 players", "7 players", "9 players", "11 players"],
        correct: 2
    },
    {
        question: "How many innings are usually played?",
        options: ["1 inning", "2 innings", "3 innings", "4 innings"],
        correct: 1
    },
    {
        question: "How do you score ONE full rounder?",
        options: ["Reach 2nd post after hitting", "Reach 4th post after hitting", "Reach 4th post without hitting", "Get two no-balls in a row"],
        correct: 1
    },
    {
        question: "How do you score HALF a rounder?",
        options: ["Hit ball and reach 1st post", "Hit ball and reach 2nd or 3rd post (and stop there)", "Hit ball and reach 4th post", "Miss ball and reach 2nd post"],
        correct: 1
    },
    {
        question: "If you miss the ball but reach 4th post, what do you score?",
        options: ["Nothing", "Half rounder", "One rounder", "Two rounders"],
        correct: 1
    },
    {
        question: "When MUST you run?",
        options: ["Only if you hit the ball", "If you hit the ball OR miss a good ball", "Only if the umpire tells you", "Never, it's optional"],
        correct: 1
    },
    {
        question: "You miss a no-ball. Do you have to run?",
        options: ["Yes, always", "No, you don't have to (but you can)", "Only if it's the first no-ball", "Only if the umpire says so"],
        correct: 1
    },
    {
        question: "You HIT a no-ball. Do you have to run?",
        options: ["Yes, you must run", "No, you don't have to", "Only to 1st post", "It depends on the umpire"],
        correct: 0
    },
    {
        question: "What happens if a bowler bowls two consecutive no-balls?",
        options: ["Batter is out", "Batter gets free pass to 1st", "Batting team gets half rounder", "Game restarts"],
        correct: 2
    },
    {
        question: "How must bowlers bowl?",
        options: ["Overarm", "Underarm with smooth action", "Sidearm", "Any style they want"],
        correct: 1
    },
    {
        question: "What makes a ball a 'no-ball'?",
        options: ["Ball is too slow", "Ball above head or below knee, or bounces, or is wide", "Ball doesn't spin", "Batter doesn't like it"],
        correct: 1
    },
    {
        question: "When can you be stumped out?",
        options: ["When running to any post", "Only at 4th post", "When the post you're running to is stumped", "Never"],
        correct: 2
    },
    {
        question: "Can you hit the ball backwards and still score?",
        options: ["No, you're out", "Yes, but wait at 1st post until ball leaves backward area", "Yes, and run immediately", "Only if it's a no-ball"],
        correct: 1
    },
    {
        question: "What must you do when waiting at a post?",
        options: ["Stand behind the post", "Keep contact with post (hand, bat, or foot)", "Hold bat in the air", "Face the bowler"],
        correct: 1
    },
    {
        question: "What happens if you overtake another runner on your team?",
        options: ["You are both out", "Nothing happens", "The person you overtook is out", "You have to go back"],
        correct: 2
    },
    {
        question: "Two batters end up at the same post. Who is out?",
        options: ["Both are out", "The second one there is out", "The first one there is out", "Neither is out"],
        correct: 2
    },
    {
        question: "You hit the ball, reach 2nd post and stop. Then you try to run to 3rd but get out. What do you score?",
        options: ["Half rounder (you reached 2nd)", "Nothing (you got out)", "One rounder", "Quarter rounder"],
        correct: 1
    },
    {
        question: "When do your points count?",
        options: ["As soon as you touch 2nd post", "When you touch 4th post", "Only when you reach home safely", "At the end of the innings"],
        correct: 2
    },
    {
        question: "Can you leave a post when the bowler has the ball in the square?",
        options: ["Yes, anytime", "No, never", "Only if running already", "Only if the umpire allows"],
        correct: 1
    },
    {
        question: "If you're already running between posts and the bowler gets the ball, what happens?",
        options: ["You must go back", "You must stop immediately", "You can complete your run to the next post", "You're out"],
        correct: 2
    },
    {
        question: "What are the required fielding positions?",
        options: ["Just a bowler", "Bowler and backstop", "Bowler, backstop, and others on field", "No required positions"],
        correct: 2
    },
    {
        question: "How can you maintain contact with a post?",
        options: ["Hand only", "Hand or bat only", "Hand, bat, or foot", "Any body part"],
        correct: 2
    },
    {
        question: "What happens if a fielder obstructs a batter?",
        options: ["Batter is out", "Fielder is out", "Batting team gets half rounder", "Nothing happens"],
        correct: 2
    },
    {
        question: "Innings format options (shortest to longest):",
        options: ["3 outs / 27 balls / all bat once / whole team out", "All bat once / 27 good balls / 3 outs / whole team out", "Whole team out / 3 outs / 27 balls / all bat once", "27 balls / all bat once / whole team out / 3 outs"],
        correct: 1
    },
    {
        question: "How many good balls does each batter usually get?",
        options: ["As many as needed", "Usually 1 (but agree before match)", "Always 3", "Unlimited"],
        correct: 1
    },
    {
        question: "Can you score on a no-ball if you choose to run?",
        options: ["No, never", "Yes, you score normally", "Only half points", "Only if you hit it"],
        correct: 1
    },
    {
        question: "What happens to batters still on the field when the next person bats?",
        options: ["They must come home immediately", "They're out", "They can stay and run when ball leaves bowler's hand", "They must wait until innings ends"],
        correct: 2
    },
    {
        question: "When does an innings end?",
        options: ["After 30 minutes", "Based on agreed format before match", "When captain decides", "After everyone is tired"],
        correct: 1
    },
    {
        question: "How does a team win?",
        options: ["First to 10 rounders", "Most players left", "Most rounders after 2 innings", "Quickest to finish"],
        correct: 2
    }
];

// Game State
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];

// Navigation Functions
function showSection(sectionName) {
    const sections = ['rules', 'interactive', 'quiz'];
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (section === sectionName) {
            element.classList.remove('hidden');
            element.classList.add('fade-in');
        } else {
            element.classList.add('hidden');
        }
    });
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// "Am I Out?" Tool - Updated with your definitive rules
function checkOut() {
    const scenario = document.getElementById('outScenario').value;
    const resultDiv = document.getElementById('outResult');
    
    if (!scenario) {
        resultDiv.classList.add('hidden');
        return;
    }
    
    resultDiv.classList.remove('hidden');
    
    const outScenarios = {
        'caught': { 
            out: true, 
            reason: "Yes, you're OUT! If the batter hits the ball and a fielder catches it before it touches the ground, the batter is out. You also lose any points from that turn." 
        },
        'stumped': { 
            out: true, 
            reason: "Yes, you're OUT! If a fielder stumps the post that you're running to, you're out. Remember, you also lose any points from that turn!" 
        },
        'nocontact': { 
            out: true, 
            reason: "Yes, you're OUT! When the bowler has the ball in the square, you must maintain contact with your post (with hand, bat, or foot). If you lose contact, you're out." 
        },
        'square': { 
            out: true, 
            reason: "Yes, you're OUT! Batters must run outside the batting square. Running inside the square means you're out." 
        },
        'overtake': { 
            out: true, 
            reason: "Actually, the person you OVERTOOK is OUT! You've run them out. This is to prevent two batters being at the same post." 
        },
        'twoatpost': { 
            out: true, 
            reason: "Yes, you're OUT! You cannot have two batters at the same post. If two batters are at the same post, the first one there is out." 
        },
        'missedball': { 
            out: false, 
            reason: "No, you're NOT out! If you miss the ball but still make it to 4th post without getting out, you score HALF a rounder! Well done!" 
        }
    };
    
    const result = outScenarios[scenario];
    if (result.out) {
        resultDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-400 text-red-900';
        resultDiv.innerHTML = `<div class="flex items-start"><i class="fas fa-times-circle text-2xl mr-3 mt-1"></i><span>${result.reason}</span></div>`;
    } else {
        resultDiv.className = 'p-4 rounded-lg bg-green-100 border-2 border-green-400 text-green-900';
        resultDiv.innerHTML = `<div class="flex items-start"><i class="fas fa-check-circle text-2xl mr-3 mt-1"></i><span>${result.reason}</span></div>`;
    }
}

// "Am I Allowed To...?" Tool - Updated with your definitive rules
function checkAllowed() {
    const action = document.getElementById('allowedAction').value;
    const resultDiv = document.getElementById('allowedResult');
    
    if (!action) {
        resultDiv.classList.add('hidden');
        return;
    }
    
    resultDiv.classList.remove('hidden');
    
    const actions = {
        'underarm': { 
            allowed: true, 
            reason: "Yes, ALLOWED! Bowlers MUST bowl underarm with a smooth action. The ball must not bounce before reaching the batter, and must be between knee and head height." 
        },
        'backward': { 
            allowed: true, 
            reason: "Yes, ALLOWED! You can hit the ball backwards and still score. However, you must wait at 1st post until the ball is thrown out of the backward area (forward past the batting square line), then you can continue running normally." 
        },
        'waitatpost': { 
            allowed: true, 
            reason: "Yes, ALLOWED! You can wait at a post between batters. When the next ball leaves the bowler's hand, you can run again. Just maintain contact with the post (hand, bat, or foot) while waiting!" 
        },
        'noballrun': { 
            allowed: true, 
            reason: "Yes, ALLOWED! If it's a no-ball and you didn't hit it, you DON'T have to run, but you CAN choose to run. If you do run, you can still score normally (½ rounder for 2nd post, 1 rounder for 4th post)." 
        },
        'noballhitrun': { 
            allowed: true, 
            reason: "Yes, you MUST run! If you hit the ball, you must run regardless of whether it was a no-ball or good ball. No exceptions!" 
        },
        'notrun': { 
            allowed: false, 
            reason: "No, NOT ALLOWED! If you miss a good ball, you MUST run. The only time you don't have to run after missing is if it was a no-ball." 
        },
        'scoreafter2nd': { 
            allowed: true, 
            reason: "Yes, ALLOWED! If you hit the ball and reach 2nd post (or 3rd), you can stop there and score ½ rounder. But be careful - if you try to continue and get out, you lose that ½ rounder!" 
        },
        'footcontact': { 
            allowed: true, 
            reason: "Yes, ALLOWED! You can use your hand, bat, OR foot to maintain contact with a post. Any of these work to keep you safe!" 
        },
        'runwhilebowlerhas': { 
            allowed: false, 
            reason: "No, NOT ALLOWED! When the bowler has the ball in the square, you cannot leave a post. However, if you're already running between posts, you can complete your run to the next post." 
        }
    };
    
    const result = actions[action];
    if (result.allowed) {
        resultDiv.className = 'p-4 rounded-lg bg-green-100 border-2 border-green-400 text-green-900';
        resultDiv.innerHTML = `<div class="flex items-start"><i class="fas fa-check-circle text-2xl mr-3 mt-1"></i><span>${result.reason}</span></div>`;
    } else {
        resultDiv.className = 'p-4 rounded-lg bg-red-100 border-2 border-red-400 text-red-900';
        resultDiv.innerHTML = `<div class="flex items-start"><i class="fas fa-times-circle text-2xl mr-3 mt-1"></i><span>${result.reason}</span></div>`;
    }
}

// Quiz Functions
function initializeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    
    // Select 10 random questions for each quiz
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    answeredQuestions = shuffled.slice(0, 10);
    
    document.getElementById('totalQuestions').textContent = answeredQuestions.length;
    document.getElementById('currentQuestion').textContent = 1;
    document.getElementById('score').textContent = 0;
    
    showQuestion();
}

function showQuestion() {
    const question = answeredQuestions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border-2 border-gray-300 transition';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
}

function selectAnswer(selectedIndex) {
    const question = answeredQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.quiz-option');
    
    // Disable all buttons
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    });
    
    // Show correct answer
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < answeredQuestions.length) {
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
            showQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / answeredQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function showResults() {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');
    
    const percentage = (score / answeredQuestions.length) * 100;
    document.getElementById('finalScore').textContent = `${score}/${answeredQuestions.length} (${percentage.toFixed(0)}%)`;
    
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
        message = "Perfect Score! You're a Rounders Master! 🏆";
        emoji = "You know every rule inside and out. Ready to teach others!";
    } else if (percentage >= 80) {
        message = "Excellent! You really know your Rounders! ⭐";
        emoji = "You're definitely ready to play with confidence!";
    } else if (percentage >= 60) {
        message = "Good job! You have a solid understanding. 👍";
        emoji = "Just review a few more rules and you'll be all set!";
    } else if (percentage >= 40) {
        message = "Not bad! But some rules need more study. 📚";
        emoji = "Review the rules section and try again!";
    } else {
        message = "Keep learning! Rounders has many rules to master. 🎯";
        emoji = "Study the rules carefully and take the quiz again!";
    }
    
    document.getElementById('resultMessage').innerHTML = `
        <p class="text-xl font-semibold mb-2">${message}</p>
        <p class="text-gray-600">${emoji}</p>
    `;
}

function restartQuiz() {
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizContent').classList.remove('hidden');
    initializeQuiz();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Show rules section by default
    showSection('rules');
    
    // Initialize quiz
    initializeQuiz();
});
