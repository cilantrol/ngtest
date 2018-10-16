import { compute } from './compute';



describe('compute', () => {
  it('should retunr 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('it should increment by 1', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });

});



