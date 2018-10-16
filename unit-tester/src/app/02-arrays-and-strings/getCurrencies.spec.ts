import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('contain some items', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
