import str from './file';

interface Test {
    a: number,
    b: number
}

const test = ({ a, b }: Test) => {
    return a + b;
}

const another = test({ a: 1, b: 2 });

export default class SomeClass {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty;
    };

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
        return SomeClass.staticProperty;
    };
}