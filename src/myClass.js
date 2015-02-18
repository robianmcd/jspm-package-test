import MyAnno from 'myPkg/myAnno';
import Assert from 'rtts-assert';

@MyAnno('testing')
class MyClass {
    constructor() {

    }

    doSomething() {
        console.log('doing something');
    }
}

export default MyClass;