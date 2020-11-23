class Card {
  //card class with keys
  constructor(name, damage, hp, speed, alignment) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.speed = speed;
    this.alignment = alignment; //alignment is an array of two values, one string for display and one num for comparison purposes
    this.winNo = 0; //counters for plays, wins and losses
    this.playedNo = 0;
    this.lossNo = 0;
  }
}
const lGood = ['Lawful Good', 1],
  nGood = ['Neutral Good', 2],
  cGood = ['Chaotic Good', 3],
  lNeutral = ['Lawful Neutral', 4],
  tNeutral = ['Neutral', 5],
  unAl = ['Unaligned', 5],
  cNeutral = ['Chaotic Neutral', 6],
  lEvil = ['Lawful Evil', 7],
  nEvil = ['Neutral Evil', 8],
  cEvil = ['Chaotic Evil', 9];
//initialises all cards and values
let kobold = new Card('Kobold', 4, 5, 30, lEvil),
  redDragon = new Card('Red Dragon', 91, 546, 80, cEvil),
  goblin = new Card('Goblin', 5, 7, 30, nEvil),
  orc = new Card('Orc', 9, 15, 30, cEvil),
  goldDragon = new Card('Gold Dragon', 71, 546, 80, lGood),
  ogre = new Card('Ogre', 13, 59, 40, cEvil),
  hydra = new Card('Hydra', 50, 172, 30, unAl),
  kraken = new Card('Kraken', 69, 472, 60, cEvil),
  mindFlayer = new Card('Mind Flayer', 22, 71, 30, lEvil),
  bandit = new Card('Bandit', 5, 11, 30, cNeutral),
  hillGiant = new Card('Hill Giant', 36, 105, 40, cEvil),
  stormGiant = new Card('Storm Giant', 60, 230, 50, cGood),
  fireElemental = new Card('Fire Elemental', 25, 102, 50, tNeutral),
  waterElemental = new Card('Water Elemental', 26, 114, 90, tNeutral),
  earthElemental = new Card('Earth Elemental', 28, 126, 30, tNeutral),
  airElemental = new Card('Air Elemental', 28, 90, 90, tNeutral),
  hobGoblin = new Card('Hobgoblin', 6, 11, 30, lEvil),
  gnoll = new Card('Gnoll', 6, 22, 30, cEvil),
  barbarian = new Card('Barbarian', 11, 32, 30, cNeutral),
  bard = new Card('Bard', 14, 24, 30, cGood),
  cleric = new Card('Cleric', 14, 24, 30, nGood),
  druid = new Card('Druid', 9, 24, 30, tNeutral),
  fighter = new Card('Fighter', 18, 28, 30, nGood),
  monk = new Card('Monk', 12, 24, 40, lNeutral),
  paladin = new Card('Paladin', 16, 28, 30, lGood),
  ranger = new Card('Ranger', 10, 28, 30, tNeutral),
  rogue = new Card('Rogue', 14, 24, 60, cNeutral),
  sorcerer = new Card('Sorcerer', 26, 20, 30, nGood),
  warlock = new Card('Warlock', 9, 24, 30, lEvil),
  wizard = new Card('Wizard', 21, 20, 30, tNeutral);
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

export { fullDeck };
