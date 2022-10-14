interface Collectibles<T, V> {
  meta(id: T);
  desc(name: V);
}

// this is just a dummy code
class Fungibles<T, V> implements Collectibles<T, V> {
  private items: T[] = [];

  private itemID: T;
  private itemName: V;

  constructor(private id: T, private name: V) {
    this.itemID = id;
    this.itemName = name;
  }

  meta(id: T) {
    return `metadata about id: ${id}`;
  }

  desc(name: V) {
    return `description about id: ${name}`;
  }
}

// implementing a practiccal example of interface with classes
