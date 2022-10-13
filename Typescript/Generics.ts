/*
 onto generics
 what is generics
 how to use generics
 when to use generics
*/

// A better solution to avoid code
//duplication while preserving the type is to use generics
//This function uses type variable T. The T allows you to
// capture the type that is provided at the time of calling the function.

function getRandElement<T>(collection: T[]): T {
  return collection[Math.floor(Math.random() * collection.length)];
}

let collection: number[] = [34, 213, 12];
let stringCollection: string[] = ["one", "two", "three"];
let booleanCollection: boolean[] = [true, false, true];
let objectCollection: object[] = [{ one: "one" }, { two: "two" }];

console.log(getRandElement<number>(collection));
console.log(getRandElement<string>(stringCollection));
console.log(getRandElement<boolean>(booleanCollection));
console.log(getRandElement<object>(objectCollection));

// return what evert that is passed to you
function returnWhatYouGet<T>(arg: T): T {
  return arg;
}

// array version of it
let returnBack = <T>(arg: T) : T => { return arg}

function addToArray<T>(whatToAdd: T[]) : T { 
    return new Array<T>().concat(whatToAdd)
}