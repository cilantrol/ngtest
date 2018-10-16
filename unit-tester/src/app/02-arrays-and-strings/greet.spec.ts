import { greet } from './greet';

describe('greet', () => {
  it('it should include the name in msg', () => {

    expect(greet('mosh)')).toContain('mosh');
  });
});
