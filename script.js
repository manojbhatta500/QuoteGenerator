const quotes = {
  science: [
    "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
    "Science is not only a disciple of reason but, also, one of romance and passion. - Stephen Hawking",
    "The important thing in science is not so much to obtain new facts as to discover new ways of thinking about them. - William Lawrence Bragg",
    "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world. - Louis Pasteur",
    "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...' - Isaac Asimov",
    "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
    "The universe is under no obligation to make sense to you. - Neil deGrasse Tyson",
    "Every atom in your body came from a star that exploded. And, the atoms in your left hand probably came from a different star than your right hand. It really is the most poetic thing I know about physics: You are all stardust. - Lawrence M. Krauss",
    "The important thing is to not stop questioning. Curiosity has its own reason for existence. - Albert Einstein",
    "Somewhere, something incredible is waiting to be known. - Carl Sagan",
  ],
  inspiration: [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  ],
  philoshopy: [
    "The unexamined life is not worth living. - Socrates",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "I think therefore I am. - René Descartes",
    "The only thing I know is that I know nothing. - Socrates",
    "He who is not a good servant will not be a good master. - Plato",
    "The greater the difficulty, the more glory in surmounting it. - Epicurus",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The mind is everything. What you think you become. - Buddha",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The unexamined life is not the worth the living for man. - Plato",
  ],
};

const quoteText = document.querySelector(".quote-text");
const prevBtn = document.getElementById("prev-btn");
const randomBtn = document.getElementById("random-btn");
const nextBtn = document.getElementById("next-btn");
const categorySelect = document.getElementById("category-select");
const decreaseFontBtn = document.getElementById("decrease-font");
const increaseFontBtn = document.getElementById("increase-font");
const darkModeToggle = document.getElementById("dark-mode");

let currentCategory = categorySelect.value;
let currentIndex = 0;
let lastDisplayedIndex = -1;
let currentFontSize = 16;

function displayQuote(index) {
  quoteText.textContent = quotes[currentCategory][index];
}

function changeCategory() {
  currentCategory = categorySelect.value;
  currentIndex = 0;
  lastDisplayedIndex = -1;
  displayQuote(currentIndex);
}

function randomQuote() {
  const lastIndex = currentIndex;
  do {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  } while (currentIndex === lastIndex);
  lastDisplayedIndex = lastIndex;
  displayQuote(currentIndex);
}

function nextQuote() {
  lastDisplayedIndex = currentIndex;
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  displayQuote(currentIndex);
}

function prevQuote() {
  currentIndex = lastDisplayedIndex;
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  lastDisplayedIndex = currentIndex;
  displayQuote(currentIndex);
}

function decreaseFont() {
  currentFontSize = Math.max(currentFontSize - 2, 10);
  quoteText.style.fontSize = `${currentFontSize}px`;
}

function increaseFont() {
  currentFontSize = Math.min(currentFontSize + 2, 36);
  quoteText.style.fontSize = `${currentFontSize}px`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

categorySelect.addEventListener("change", changeCategory);
prevBtn.addEventListener("click", prevQuote);
randomBtn.addEventListener("click", randomQuote);
nextBtn.addEventListener("click", nextQuote);
decreaseFontBtn.addEventListener("click", decreaseFont);
increaseFontBtn.addEventListener("click", increaseFont);
darkModeToggle.addEventListener("change", toggleDarkMode);

displayQuote(currentIndex);
