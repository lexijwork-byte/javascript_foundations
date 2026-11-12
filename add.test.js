const add = require('./add')

describe('add', () => {
  it('adds 2 and 2 and returns 4', () => {
     expect(add(2, 2)).toEqual(4);
  });
});
