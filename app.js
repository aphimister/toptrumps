const { fullDeck } = require('./cards');
const { shuffle, compareDamage } = require('./functions');

let shuffledDeck = shuffle(fullDeck),
  deck1 = shuffledDeck.slice(0, 15),
  deck2 = shuffledDeck.slice(15),
  limbo = []; // shuffles the deck

// while (deck1.length > 0 && deck2.length > 0) {
for (let i = 0; i < 5000; i++) {
  // console.log(deck1[0].name, deck2[0].name, limbo);
  // console.log(deck1[deck1.length - 1].name, deck2[deck2.length - 1].name);
  let winner = compareDamage(deck1[0], deck2[0]);
  if (winner == 0) {
    console.log(`It's a draw`);
    limbo.push(deck1.shift(), deck2.shift());
  } else if (winner == 1) {
    console.log(
      `${deck1[0].name} from deck1 beats ${deck2[0].name} from deck2`
    );
    deck1.push(...limbo, deck1.shift(), deck2.shift());
    limbo = [];
  } else if (winner == 2) {
    console.log(
      `${deck2[0].name} from deck2 beats ${deck1[0].name} from deck1`
    );
    deck2.push(...limbo, deck1.shift(), deck2.shift());
    limbo = [];
  } else {
    console.log(`something's gone wrong`);
    break;
  }
  // console.log(deck1.length, deck2.length, limbo.length);
  // console.log(deck1[0].name, deck2[0].name, limbo);
  // console.log(deck1[deck1.length - 1].name, deck2[deck2.length - 1].name);
}
for (let i = 0; i < fullDeck.length; i++) {
  console.log(fullDeck[i]);
}
console.log(deck1.length, deck1);
console.log(deck2.length, deck2);
