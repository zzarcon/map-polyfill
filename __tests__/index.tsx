import Map from '../src';

describe('MapPolyfill', () => {
  describe('has()', () => {
    it('should return true if the value exists', () => {
      const foo = () => {};
      const map = new Map<Function, string>();

      map.set(foo, 'first');
      expect(map.has(foo)).toBeTruthy();
    });
  });

  describe('get()', () => {
    it('should return undefined if the value doesnt exist', () => {
      const foo = () => {};
      const bar = () => {};
      const map = new Map<Function, string>();

      map.set(foo, 'first');
      expect(map.get(bar)).toBeUndefined();
    });

    it.only('should return the already set value', () => {
      const foo = () => {};
      const map = new Map<Function, string>();

      map.set(foo, 'first');
      expect(map.get(foo)).toEqual('first');
    });
  });

  describe('set()', () => {

  });
});
