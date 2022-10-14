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
