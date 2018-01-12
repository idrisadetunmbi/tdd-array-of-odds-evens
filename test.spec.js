// NOTE: arrayOddEven would have been the actual function if it were written
// expect is a jest library for test assertion https://github.com/mjackson/expect

describe('Function Generating Array of Odd and Even Numbers') {
  describe('handles invalid inputs appropriately') {
    it('raises an error for a string value - e.g. \'string value\'', () => {
      expect(function() { arrayOddEven('string value') }).toThrow("Invalid input provided");
    });
    it('raises an error for an empty array', () => {
      expect(function() { arrayOddEven([]) }).toThrow("Invalid input provided");
    });
    it('raises an error for an object', () => {
      expect(function() { arrayOddEven({}) } ).toThrow("Invalid input provided");
    });
    it('raises an error for an empty argument', () => {
      expect(function() { arrayOddEven() }).toThrow("Invalid input provided");
    });
    it('raises an error for \'undefined\' as input', () => {
      expect(function() { arrayOddEven(undefined) }).toThrow("Invalid input provided");
    });
    it('raises an error for \'null\' as input', () => {
      expect(function() { arrayOddEven(null) }).toThrow("Invalid input provided");
    });
    it('raises an error for an array input with invalid elements', () => {
      expect(function() { arrayOddEven([1, 2, '']) }).toThrow("Invalid input provided");
    });
    it('throws an error with a negative value', () => {
      expect(function() { arrayOddEven(-1) }).toThrow("Invalid input provided");
    });
    it('throws an error with a floating point value', () => {
      expect(function() { arrayOddEven(10.21) }).toThrow("Invalid input provided");
    });
    it('throws an error with an array containing negative values', () => {
      expect(function() { arrayOddEven([-1, 23, 10]) }).toThrow("Invalid input provided");
    });
    it('throws an error with an array containing floating point values', () => {
      expect(function() { arrayOddEven([10.23, 24, 1]) }).toThrow("Invalid input provided");
    });
  }
  
  describe('allows valid input') {
    it('does not throw an error for an integer input', () => {
      expect(arrayOddEven(9)).toNotThrow();
    });
    it('does not throw an error with an integer input enclosed as string', () => {
      expect(arrayOddEven('10')).toNotThrow());
    });
    it('does not throw an error with an array input containing valid integer elements', () => {
      expect(arrayOddEven([1, 2, 3, 4, 5, 6, 7])).toNotThrow();
    });
    it('does not throw an error with an array input containing valid integer elements enclosed as string', () => {
      expect(arrayOddEven(['1', 2, 3, '4'])).toNotThrow());
    });
  }
  
  describe('provides correct results') {
    it('returns [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]] with 10 as input', () => {
      expect(arrayOddEven(10)).toEqual([[1, 3, 5, 7], [2, 4, 6, 8, 10]]);
    });
    it('returns [[11, 13, 15], [10, 12, 14]] with [10, 11, 12, 13, 14, 15] as input', () => {
      expect(arrayOddEven([10, 11, 12, 13, 14, 15])).toEqual([[11, 13, 15], [10, 12, 14]]);
    });
    it('returns [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]] with \'10\' as input', () => {
      expect(arrayOddEven('10')).toEqual([[1, 3, 5, 7], [2, 4, 6, 8, 10]]);
    });
    it('returns [[11, 13, 15], [10, 12, 14]] with [\'10\', \'11\', 12, \'13\', 14, 15] as input', () => {
      expect(arrayOddEven(['10', '11', 12, '13', 14, 15])).toEqual([[11, 13, 15], [10, 12, 14]]);
    });
    it('returns [[25, 77, 903, 425], [52, 16, 14, 1004]] with [25, 52, 77, 903, 16, 14, 425, 1004] as input', () => {
      expect(arrayOddEven([25, 52, 77, 903, 16, 14, 425, 1004])).toEqual([[25, 77, 903, 425], [52, 16, 14, 1004]]);
    });
  }
}
