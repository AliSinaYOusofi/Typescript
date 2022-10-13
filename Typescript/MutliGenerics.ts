function resting<T, U>(one: T, two: U): T | U {
  return {
    ...one,
    ...two,
  };
}

console.log(resting({ one: 1 }, { two: 2 }));
