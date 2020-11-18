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
module.exports = {
  shuffle,
  compareDamage,
};
