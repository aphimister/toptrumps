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

module.exports = {
  fullDeck,
};
