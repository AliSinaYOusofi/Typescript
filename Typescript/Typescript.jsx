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
    
    return age >= Ages.adult && age <= Ages.old;
}