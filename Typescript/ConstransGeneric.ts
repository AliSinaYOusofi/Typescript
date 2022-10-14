function mergeObjectsOnly<U extends object, T extends object>(
  first: U,
  second: T
): object {
  return {
    ...first,
    ...second,
  };
}

// issues an error when compiled

// without generics constrains it will accpet any argument of any type
function withoutGenericConstrains<U, T>(first: U, second: T): object {
  return {
    ...first,
    ...second,
  };
}

function retrunProperty<K extends keyof V, V>(collection: V, property: K) {
  return collection[property];
}

console.log(retrunProperty({ name: "dewana" }, "name"));
// this will issue an error when a property does not exist on an object
console.log(retrunProperty({ age: 10 }, "name"));
