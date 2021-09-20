class Dog {
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello = (): string => {
        return "Woof woof";
    }
}

console.log(Dog);

// class Fish {
//     name: string;
//     dive = (howDeep: number): string => {
//         return `diving ${howDeep} meters`;
//     }
// }
//
// type Pet = {
//
// }
//
// const talkToPet = (pet: Pet):string => {
//     if (pet is)
// }
//
// talkToPet(Fish);
// talkToPet(Dog);
// talkToPet({ car: true });

