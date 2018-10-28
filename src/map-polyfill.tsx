export class MapPolyfill<K, V> {
  private _keys: K[];
  private _values: V[];

  constructor() {
    this._keys = [];
    this._values = [];
  }

  has(key: K): boolean {
    return this._keys.indexOf(key) > -1;
  }

  get(key: K): V | undefined {
    const keyIndex = this._keys.indexOf(key);

    return this._values[keyIndex];
  }

  set(key: K, value: V): this {
    if (!this.has(key)) {
      this._keys.push(key);
      this._values.push(value);
    }
    
    return this;
  }

  delete(key: K): boolean {
    const exists = this.has(key);
    
    if (exists) {
      const keyIndex = this._keys.indexOf(key);

      this._keys.splice(keyIndex, 1);
      this._values.splice(keyIndex, 1);
    }

    return exists;
  }

  keys(): K[] {
    return this._keys;
  }

  values(): V[] {
    return this._values;
  }

  entries() {

  }

  clear() {

  }
}