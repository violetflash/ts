type taxesType = number | undefined;

const taxes = (state: string, income: number, dependents: number): taxesType => {
    switch (state) {
        case "NY":
            return income * 0.06 - dependents * 500;
        case "NJ":
            return income * 0.05 - dependents * 300;
        default: return income;
    }
}

let tax = taxes("NY", 50000, 4);

// class Person {
//     name: string;
// }
// function getP(p: Person){
//     if (p instanceof Person){ // ошибка компиляции
//     }
// }

class Person {
    name: String;
    age?: Number;
}
class Customer {
    name: String;
}
const cust: Customer = { name: 'Mary' };
const pers: Person = { name: 'John' };


