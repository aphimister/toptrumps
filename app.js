import { fullDeck } from './cards.js';
import { shuffle, compareDamage } from './functions.js';
const cardTitles = document.getElementsByClassName('title');//getting display elements
const damageDisplay = document.getElementsByClassName('damageDisplay');
const speedDisplay = document.getElementsByClassName('speedDisplay');
const alignDisplay = document.getElementsByClassName('alignmentDisplay');
let shuffledDeck = shuffle(fullDeck),//shuffles the deck !consider moving to cards.js 
  deck1 = shuffledDeck.slice(0, 15),//splits into decks
  deck2 = shuffledDeck.slice(15),
  limbo = []; // shuffles the deck
cardTitles[0].textContent = deck1[0].name;//displays card titles
cardTitles[1].textContent = deck2[0].name;
damageDisplay[0].textContent = `Damage: ${deck1[0].damage}`//displays attributes...
damageDisplay[1].textContent = `Damage: ${deck2[0].damage}`
speedDisplay[0].textContent = `Speed: ${deck1[0].speed}`
speedDisplay[1].textContent = `Speed: ${deck2[0].speed}`
alignDisplay[0].textContent = `Alignment: ${deck1[0].alignment[0]}`
alignDisplay[1].textContent = `Alignment: ${deck2[0].alignment[0]}`
