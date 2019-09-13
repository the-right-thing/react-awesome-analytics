import React, { Component } from 'react';
import str from './file';

interface Test {
    a: number;
    b: number;
}

const test = ({ a, b }: Test) => {
    return a + b;
};

const another = test({ a: 1, b: 2 });

export default class SomeClass extends Component {
    render() {
        console.log('another', another);
        console.log('str', str);
        return <div>123</div>;
    }
}
