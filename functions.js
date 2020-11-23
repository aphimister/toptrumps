function shuffle(array) {
  //https://bost.ocks.org/mike/shuffle/
  let m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
const compareAttribute = (card1, card2, attr) => {
  //compares the damage property, returns a number to represent the winner
  card1.playedNo += 1;
  card2.playedNo += 1;
  console.log(attr, card1[attr], card2[attr]);
  if (card1[attr] == card2[attr]) {
    return 0; // 0 is a draw
  }
  if (card1[attr] > card2[attr]) {
    card1.winNo += 1;
    card2.lossNo += 1;
    return 1; // 1 is a win for deck1
  } else if (card1[attr] < card2[attr]) {
    card2.winNo += 1;
    card1.lossNo += 1;
    return 2; //2 is a win for deck2
  }
};

const gamePlay = (deck1, deck2, attr, limbo) => {
  let winner = compareAttribute(deck1[0], deck2[0], attr);
  if (winner == 0) {
    console.log(`It's a draw`);
    limbo.push(deck1.shift(), deck2.shift());
    console.log(limbo);
  } else if (winner == 1) {
    console.log(
      `${deck1[0].name} from deck1 beats ${deck2[0].name} from deck2`
    );
    deck1.push(...limbo, deck1.shift(), deck2.shift());
    limbo = [];
    console.log(limbo);
  } else if (winner == 2) {
    console.log(
      `${deck2[0].name} from deck2 beats ${deck1[0].name} from deck1`
    );
    deck2.push(...limbo, deck1.shift(), deck2.shift());
    limbo = [];
    console.log(limbo);
  } else {
    console.log(`something's gone wrong`);
  }
};
const contentUpdate = (
  deck1,
  deck2,
  cardTitles,
  damageDisplay,
  HPDisplay,
  speedDisplay,
  alignDisplay,
  deckSizeDisplay
) => {
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
  deckSizeDisplay[0].textContent = deck1.length;
  deckSizeDisplay[1].textContent = deck2.length;
};
export { shuffle, compareAttribute, gamePlay };
