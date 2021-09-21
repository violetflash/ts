export type obj = {
    [key: number] : number
}

export let obj1: obj = {
    256: 5,
    32: 1,
    100: 2
}

let f = ['red'];
f.push('blue');
f.push(true);

let g: Array<boolean> = [];
g.push(false);
g.push(2);