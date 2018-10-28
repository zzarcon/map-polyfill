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

    it('should return the already set value', () => {
      const foo = () => {};
      const map = new Map<Function, string>();

      map.set(foo, 'first');
      expect(map.get(foo)).toEqual('first');
    });
  });

  describe('set()', () => {
    it('should allow chaining', () => {

    });
  });

  describe('delete()', () => {
    it('should delete the item from the collection', () => {
      const foo = () => {};
      const map = new Map<Function, string>();

      map.set(foo, 'first');
      map.delete(foo);
      expect(map.get(foo)).toBeUndefined();
    })

    it('should return true if the item was deleted', () => {
      const foo = () => {};
      const map = new Map<Function, string>();

      map.set(foo, 'first');
      expect(map.delete(foo)).toBeTruthy();
    })

    it('should return false if the item was not in the collection', () => {
      const foo = () => {};
      const map = new Map<Function, string>();

      expect(map.delete(foo)).toBeFalsy();
    })
  });
});
