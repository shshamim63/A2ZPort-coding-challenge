const findLongestWordInSentence = (sentence) => {
  if (!sentence) return null;

  return sentence.split(/\s+/).reduce(
    (longestWord, word) => {
      const sanitizedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
      const vowelCount = (sanitizedWord.match(/[aeiou]/g) || []).length;

      if (
        sanitizedWord.length > longestWord.word.length ||
        (sanitizedWord.length === longestWord.word.length &&
          vowelCount > longestWord.vowels)
      ) {
        return { word: sanitizedWord, vowels: vowelCount };
      }

      return longestWord;
    },
    { word: "", vowels: 0 }
  ).word;
};

const sentence = `"Smart people learn from everything and everyone, average people from their , stupid people already, have all the answers"(
    Socrates
  )`;
const longestWord = findLongestWordInSentence(sentence);
console.log(longestWord);
