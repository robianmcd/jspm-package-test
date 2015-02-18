import MyAnno from 'myPkg/myAnno';

@MyAnno('testing')
class MyClass {
    constructor() {

    }

    doSomething() {
        console.log('doing something');
    }
}

export default MyClass;