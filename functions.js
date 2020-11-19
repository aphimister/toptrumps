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
const compareDamage = (card1, card2) => {//compares the damage property, returns a number to represent the winner
  card1.playedNo += 1;
  card2.playedNo += 1;
  if (card1.damage == card2.damage) {
    return 0;// 0 is a draw
  }
  if (card1.damage > card2.damage) {
    card1.winNo += 1;
    card2.lossNo += 1;
    return 1;// 1 is a win for deck1
  } else if (card1.damage < card2.damage) {
    card2.winNo += 1;
    card1.lossNo += 1;
    return 2;//2 is a win for deck2
  }
};
export { shuffle, compareDamage };
