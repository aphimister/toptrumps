import { fullDeck } from './cards.js';
import { shuffle, compareAttribute, gamePlay } from './functions.js';
const contentUpdate = () => {
  cardTitles[0].textContent = deck1[0].name; //displays card titles
  cardTitles[1].textContent = deck2[0].name;
  damageDisplay[0].textContent = `Damage: ${deck1[0].damage}`; //displays attributes...
  damageDisplay[1].textContent = `Damage: ${deck2[0].damage}`;
  HPDisplay[0].textContent = `Hit points: ${deck1[0].hp}`;
  HPDisplay[1].textContent = `Hit points: ${deck2[0].hp}`;
  speedDisplay[0].textContent = `Speed: ${deck1[0].speed}`;
  speedDisplay[1].textContent = `Speed: ${deck2[0].speed}`;
  alignDisplay[0].textContent = `Alignment: ${deck1[0].alignment[0]}`;
  alignDisplay[1].textContent = `Alignment: ${deck2[0].alignment[0]}`;
  deckSizeDisplay[0].textContent = `Player 1: ${deck1.length}`;
  deckSizeDisplay[1].textContent = `Player 2: ${deck2.length}`;
};

const cardTitles = document.getElementsByClassName('title'); //getting display elements
const damageDisplay = document.getElementsByClassName('damageDisplay');
const HPDisplay = document.getElementsByClassName('hPDisplay');
const speedDisplay = document.getElementsByClassName('speedDisplay');
const alignDisplay = document.getElementsByClassName('alignmentDisplay');
const deckSizeDisplay = document.getElementsByClassName('deckSize');
let shuffledDeck = shuffle(fullDeck), //shuffles the deck !consider moving to cards.js
  deck1 = shuffledDeck.slice(0, 15), //splits into decks
  deck2 = shuffledDeck.slice(15),
  limbo = [];
contentUpdate();

console.log(compareAttribute(deck1[0], deck2[0], 'damage'));
console.log(compareAttribute(deck1[0], deck2[0], 'hp'));
console.log(compareAttribute(deck1[0], deck2[0], 'speed'));
console.log(compareAttribute(deck1[0], deck2[0], 'alignment[1]'));
for (let i = 0; i < 2; i++) {
  damageDisplay[i].addEventListener('click', () => {
    gamePlay(deck1, deck2, 'damage', limbo);
    contentUpdate();
    console.log(deck1.length, deck2.length, limbo);
  });
  HPDisplay[i].addEventListener('click', () => {
    gamePlay(deck1, deck2, 'hp', limbo);
    contentUpdate();
    console.log(deck1.length, deck2.length, limbo);
  });
  speedDisplay[i].addEventListener('click', () => {
    gamePlay(deck1, deck2, 'speed', limbo);
    contentUpdate();
    console.log(deck1.length, deck2.length, limbo);
  });
}
