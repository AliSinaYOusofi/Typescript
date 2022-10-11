type alphaNumeric = string | number;

interface functionSignature {
  (name: alphaNumeric, password: alphaNumeric): boolean;
}

let goodFunction: functionSignature;

// why the fuck should i type the same function signature twice
// only parameters name should be different and that their type should
// be written holy typescript
goodFunction = function (name: alphaNumeric, password: alphaNumeric): boolean {
  return String(password).length >= 10 ? true : false;
};
