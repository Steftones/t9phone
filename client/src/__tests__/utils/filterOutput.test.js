import filterOutput from '../../utils/filterOutput';

describe('filterOutput', () => {
  test('it should filter real words from erroneous words when the filter type is null', () => {
    const output = filterOutput(null, ['cat', 'dog', 'erroneousWord', 'erroneousWord2']);
    expect(output).toEqual('cat, dog');
  });
  test('it should not return any words when all words are erroneous and the filter type is null', () => {
    const output = filterOutput(null, ['erroneousWord', 'erroneousWord2']);
    expect(output).toEqual('');
  });
  test('it should not return any words when there is no input and the filter type is null', () => {
    const output = filterOutput(null, ['']);
    expect(output).toEqual('');
  });
  test('it should not filter anything when the filter type is Decrypt T9', () => {
    const output = filterOutput('Decrypt T9', ['cat', 'dog']);
    expect(output).toEqual('cat, dog');
  });
});