function resting<T, U>(one: T, two: U): T | U {
  return {
    ...one,
    ...two,
  };
}

// sorting algo

function sort<T>(collection: T): T {
  return collection.sort();
}
