'use strict';

const uuid = require('uuid').v4;
const schema = require('./mug.schema');
require('./index');



describe('post route', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });


  it('gets an id', () => {
    let value = uuid(() => true);
    expect(value).toHaveReturned();
  });
});