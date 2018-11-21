const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.arraysIdentical = function (arrayOne, arrayTwo) {
  // check arrays are identical
  // first create copies as this is destructive to arrayTwo
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

AnagramFinder.prototype.sortLetters = function (word) {
  // two words are anagrams if the sorted set of letters
  // are identical. e.g god -> [d,g,o], dog -> [d,g,o]
  // good -> [d,g,o,o] so not an anogram
  return word.split("").sort();
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((word) => {
    return this.arraysIdentical(this.sortLetters(word.toLowerCase()), this.sortLetters(this.word.toLowerCase()));
  })
}

module.exports = AnagramFinder
