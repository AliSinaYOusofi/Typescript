function isYoung(age: number = 0, extra: string? = "optional") : boolean { 
    
    // parameter with
    // default value with optional
    
    // working with enums
    enum Ages {
        child = 10,
        adult = 40,
        old = 70,
        extra
    }
    
    let productLines : any;
    productLines = { Company: "worley", "current" : "employeed"};
    
    
    
    return age >= Ages.adult && age <= Ages.old;
}

function nothing() : void { 
    let nothing : void = undefined; // only undefined to void type
    console.log("nothing functions")
}

function throwOnlyError () : never {
    throw new Error("never only throws error");
}

function indefiniteLoop() : never {
    while (true) console.log("error");
}

function makeMeValid(a : number | string, b: number | string, ...opt: number[]) : boolean {
   if (typeof a === "string") return true;
   else if (typeof a === "number") return false;
    // making the function valid just in case
    return makingValid();
}

function makingValid() : never { throw new Error("Made it Valid")};
function typeAlias() : void {
    
    // type aliases
    type alphanumeric = string | number | number[];
    let number : alphanumeric = [12, 34, 23];
    
    let fixedAmountOfUsers : [string, string, string, string] = ["one", 'two', 'three', 'four'];
}

// done types 