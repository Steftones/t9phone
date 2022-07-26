import preProcessedWords from './preProcessedWords';

// filtering options
const filterOutput = (filterType, displayOutput) => (
  filterType === 'Decrypt T9'
    ? displayOutput.join(', ')
    : displayOutput.filter(outputWord => filterRealWords(outputWord)).join(', ')
);

// binary search algorithm
const filterRealWords = word => {
  const wordLength = word.length;
  if (!preProcessedWords[wordLength]) {
    return null;
  };
  const words = preProcessedWords[wordLength].length / wordLength;
  let low = 0;
  let high = words - 1;
  let middle = Math.floor(words / 2);

  while (high >= low) {
    let found = preProcessedWords[wordLength].substr(wordLength * middle, wordLength);
    if (word === found) {
      return true;
    }
    word < found ? high = middle - 1 : low = middle + 1;
    middle = Math.floor((low + high) / 2);
  };
};

export default filterOutput;