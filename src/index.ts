interface Test {
    a: number,
    b: number
}

const test = ({ a, b }: Test) => {
    return a + b;
}

const another = test({ a: 1, b: 2 });