'use-strict';

const cardContainer = document.getElementById('card-container');

function createCard(title, content) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('item');

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;

  const cardContent = document.createElement('p');
  cardContent.textContent = content;


  card.appendChild(cardTitle);
  card.appendChild(cardContent);

  return card;
}

const card1 = createCard(
  'Dyanmic Cards 101',
  'Learn how to spice up your websites'
);
const card2 = createCard(
  'The Power of Flexibility',
  'Improve your ability to display responsive data'
);

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);

document.getElementById('btn--new-card').addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const newCard = createCard(title, content);
  title && content && cardContainer.append(newCard)
});
