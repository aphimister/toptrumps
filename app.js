class Card {
  //card class with keys
  constructor(name, damage, speed) {
    this.name = name;
    this.damage = damage;
    this.speed = speed;
    this.winNo = 0;
    this.playedNo = 0;
    this.lossNo = 0;
  }
}
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
const compareDamage = (card1, card2) => {
  card1.playedNo += 1;
  card2.playedNo += 1;
  if (card1.damage == card2.damage) {
    return 0;
  }
  if (card1.damage > card2.damage) {
    card1.winNo += 1;
    card2.lossNo += 1;
    return 1;
  } else if (card1.damage < card2.damage) {
    card2.winNo += 1;
    card1.lossNo += 1;
    return 2;
  }
};
//initialises all cards and values
let kobold = new Card('Kobold', 4, 30),
  redDragon = new Card('Red Dragon', 91, 80),
  goblin = new Card('Goblin', 5, 30),
  orc = new Card('Orc', 9, 30),
  goldDragon = new Card('Gold Dragon', 71, 80),
  ogre = new Card('Ogre', 13, 40),
  hydra = new Card('Hydra', 50, 30),
  kraken = new Card('Kraken', 69, 60),
  mindFlayer = new Card('Mind Flayer', 22, 30),
  bandit = new Card('Bandit', 5, 30),
  hillGiant = new Card('Hill Giant', 36, 40),
  stormGiant = new Card('Storm Giant', 60, 50),
  fireElemental = new Card('Fire Elemental', 25, 50),
  waterElemental = new Card('Water Elemental', 26, 90),
  earthElemental = new Card('Earth Elemental', 28, 30),
  airElemental = new Card('Air Elemental', 28, 90),
  hobGoblin = new Card('Hobgoblin', 6, 30),
  gnoll = new Card('Gnoll', 6, 30),
  barbarian = new Card('Barbarian', 11, 30),
  bard = new Card('Bard', 14, 30),
  cleric = new Card('Cleric', 14, 30),
  druid = new Card('Druid', 9, 30),
  fighter = new Card('Fighter', 18, 30),
  monk = new Card('Monk', 12, 35),
  paladin = new Card('Paladin', 16, 30),
  ranger = new Card('Ranger', 10, 30),
  rogue = new Card('Rogue', 14, 60),
  sorcerer = new Card('Sorcerer', 26, 30),
  warlock = new Card('Warlock', 9, 30),
  wizard = new Card('Wizard', 21, 30);
const fullDeck = [
  //array of cards
  kobold,
  redDragon,
  goblin,
  orc,
  goldDragon,
  ogre,
  hydra,
  kraken,
  mindFlayer,
  bandit,
  hillGiant,
  stormGiant,
  fireElemental,
  waterElemental,
  earthElemental,
  airElemental,
  hobGoblin,
  gnoll,
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard,
];
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
