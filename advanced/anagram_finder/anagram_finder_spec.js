const assert = require('assert');
const AnagramFinder = require('./anagram_finder.js');

describe('AnagramFinder', function () {

  // i added a couple in here for my utility methods

  it('should be able to sort a string into an array of letters', function () {
    const anagramFinder = new AnagramFinder('castle');
    const actual = anagramFinder.sortLetters("castle");
    const expected = ['a','c','e','l','s','t'];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be possible to confirm two arrays are identical', function () {
    const anagramFinder = new AnagramFinder('castle');
    assert.strictEqual(anagramFinder.arraysIdentical([1,2,3],[1,2,3]), true);
    assert.strictEqual(anagramFinder.arraysIdentical([1,2,3],[]), false);
    assert.strictEqual(anagramFinder.arraysIdentical([1,2,3],[1,2,3,4]), false);
  });

  it('should be able to detect an anagram', function () {
    const anagramFinder = new AnagramFinder('act');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['cat', 'dog']), ['cat']);
  });

  it('should be able to detect a non-anagram', function () {
    const anagramFinder = new AnagramFinder('potato');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['tomato']), []);
  })

  it('should not detect words with too few letters as an anagram', function () {
    const anagramFinder = new AnagramFinder('good');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['dog']), []);
  });

  it('should not detect words with too many letters as an anagram', function () {
    const anagramFinder = new AnagramFinder('dog');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['good']), []);
  });

  xit('should detect an anagram regardless of case', function () {
    const anagramFinder = new AnagramFinder('DeduCTionS');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['DiscOUnteD']), ['DiscOUnteD']);
  });

  xit('should not detect a word as it\'s own anagram', function () {
    const anagramFinder = new AnagramFinder('javascript');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['javascript']), []);
  });

  it('should not detect an empty string as an anagram', function () {
    const anagramFinder = new AnagramFinder('word');
    assert.deepStrictEqual(anagramFinder.findAnagrams(['']), []);
  });
});
