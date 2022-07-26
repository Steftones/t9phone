import words from 'an-array-of-english-words';

// pre-process the word array
const preProcessedWords = {};
words.forEach(word =>
  preProcessedWords[word.length] = preProcessedWords[word.length]
    ? preProcessedWords[word.length] + word
    : word
);

export default preProcessedWords;