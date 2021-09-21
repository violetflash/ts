class Person {
    constructor(public firstName: string, public lastName: string, private age: number) {}
}

const peter = new Person('Peter', "Wyllis", 30);
console.log(peter);

// class Employee extends Person {
//     department = "";
// }
//
// class Man extends Person {
//     firsName = "Man";
// }
//
// const empl = new Employee();
// const me = new Man()
// console.log(me.firsName);


const has = (value: any): value is boolean => !!value;

