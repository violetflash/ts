class Dog {
    constructor(readonly name: string) {}

    sayHello = (): string => {
        return "Woof woof";
    }
}


class Fish {
    constructor(readonly name: string) {}

    dive = (howDeep: number): string => {
        return `diving ${howDeep} meters`;
    }
}

type Pet = Dog | Fish;

const talkToPet = (pet: Pet): string | undefined => {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    if (pet instanceof Fish) {
        return "Fish cannot talk, sorry!";
    }
}

const mike = new Dog("Mike");
const dory = new Fish("Dory");

console.log(talkToPet(mike));
console.log(talkToPet(dory));
talkToPet({ car: true });

