const telPad = {
  '1': '',
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
  '*': '',
  '0': '',
  '#': ''
};

const t9Decode = numbers => {
  if (!numbers) {
    return [];
  };
  return numbers.split('').map(digit => telPad[digit] || [''])
    .reduce((acc, val) => {
      const output = [];
      acc.reduce((acc, val2) => val.map(digit => output.push(`${val2}${digit}`)), []);
      return output;
    });
};

module.exports = { telPad, t9Decode };

