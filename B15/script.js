// Thua

const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
let score = 0;
let selectedCards = [];
let selectedCardElements = [];

// Xáo trộn vị trí các thẻ
function shuffleCards() {
  const cards = Array.from(document.querySelectorAll(".card"));
  cards.sort(() => 0.5 - Math.random());
  cards.forEach((card) => grid.appendChild(card));
}

// Lật thẻ
function flipCard() {
  const cardElement = this;

  if (selectedCards.length === 2) return; // Không cho phép chọn hơn 2 thẻ

  cardElement.classList.add("flipped");

  // Lấy src của ảnh trong thẻ để so sánh
  const cardImageSrc = cardElement.querySelector("img").src;
  selectedCards.push(cardImageSrc);
  selectedCardElements.push(cardElement);

  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// Kiểm tra khớp
function checkMatch() {
  const [card1, card2] = selectedCards;
  const [element1, element2] = selectedCardElements;

  if (card1 === card2 && element1 !== element2) {
    score += 1;
    scoreDisplay.textContent = `Điểm: ${score}`;
    // Ẩn các thẻ đã khớp
    element1.style.visibility = "hidden";
    element2.style.visibility = "hidden";
  } else {
    // Lật lại nếu không khớp
    element1.classList.remove("flipped");
    element2.classList.remove("flipped");
  }

  // Xóa lựa chọn
  selectedCards = [];
  selectedCardElements = [];
}

// Khởi tạo trò chơi
shuffleCards();
document
  .querySelectorAll(".card")
  .forEach((card) => card.addEventListener("click", flipCard));
