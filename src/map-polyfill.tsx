export class MapPolyfill<K, V> {
  private keys: K[];
  private values: V[];

  constructor() {
    this.keys = [];
    this.values = [];
  }

  has(key: K): boolean {
    return this.keys.indexOf(key) > -1;
  }

  get(key: K): V | undefined {
    const keyIndex = this.keys.indexOf(key);

    return this.values[keyIndex];
  }

  set(key: K, value: V): this {
    if (!this.has(key)) {
      this.keys.push(key);
      this.values.push(value);
    }
    
    return this;
  }

  delete(key: K): boolean {

  }

  private generateKey(): string {

  }
}