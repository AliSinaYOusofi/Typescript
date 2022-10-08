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

function nothing() : void { console.log("nothing functions")}