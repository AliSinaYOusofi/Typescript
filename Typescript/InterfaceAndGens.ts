interface employees<T, V, K> {
    empName: T;
    empAge: V;
    empEmployed: K;
    empMeta?: T
}

let newEmployee : employees<string, number, boolean> = {
    empName: "GIT",
    empAge: 20,
    empEmployed: false
}

let partialEmployee : employees<string, number, boolean> = {
    empName: "Ali",
    empAge: 20,
    empEmployed: true,
    empMeta: "meta data goes here"
}
