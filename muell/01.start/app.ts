// const person: {
//     name: string,
//     age: number
// } = {
const person = {
    name: "Alex",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}