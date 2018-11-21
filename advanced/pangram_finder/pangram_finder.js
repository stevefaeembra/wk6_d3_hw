const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  // copy only letters to this.phrase
  const phrase_array = phrase.split('');
  const just_letters = phrase_array.filter((letter) => {
    return this.alphabet.lastIndexOf(letter) != -1;
  });
  console.log(`Just letters: ${just_letters}`);
  // smoosh into a string so I can reuse code from anagram :)
  this.phrase = just_letters.join('');
  console.log(`this.phrase = ${ this.phrase }`);
}

PangramFinder.prototype.isPangram = function () {
  console.log(`Sort Letters: ${ this.sortLetters(this.phrase)}`);
  console.log(`Sort Alphabet: ${ this.sortLetters(this.alphabet.join(''))}`);

  return this.arraysIdentical(
    this.sortLettersAndStripDuplicates(this.phrase),
    this.sortLettersAndStripDuplicates(this.alphabet.join(''))
  )
}

PangramFinder.prototype.sortLettersAndStripDuplicates = function (word) {
  // oops, i seem to confused pangrams with omnigrams
  // i need a method to sort the letters, but remove dupes
  // e.g. [a,b,b,c,d,d] -> [a,b,c,d]
  const sortedLetters = this.sortLetters(word);
  // feck it, gonna use a forEach
  let deduplicated = [];
  let lastLetter = '';
  sortedLetters.forEach((letter) => {
    if (letter!=lastLetter) {
      lastLetter = letter;
      deduplicated.push(lastLetter);
    }
  });
  return deduplicated;
};

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
