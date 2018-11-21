const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.arraysIdentical(
    this.sortLetters(this.phrase),
    this.alphabet
  )
}

PangramFinder.prototype.arraysIdentical = function (arrayOne, arrayTwo) {
  // check arrays are identical
  // first create copies as this is destructive to arrayTwo
  // this is copied from AnagramFinder so it's tested already
  // @TODO ask instructors how to best share this code,
  // as a separate class etc.
  const arrayOneCopy = arrayOne.slice(0);
  const arrayTwoCopy = arrayTwo.slice(0);
  // if different length, can't be identical
  if (arrayOne.length != arrayTwo.length) return false;
  // same length, should pop from start (shift) each one and
  // compare to next in array.
  return arrayOne.every((item) => {
    return item === arrayTwoCopy.shift();
  })
};

PangramFinder.prototype.sortLetters = function (word) {
  // sort letters. cannibalised from anagram finder
  // so I know it works.
  return word.split("").sort();
};

module.exports = PangramFinder;
