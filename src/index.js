class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat () {
        alert(`${this.name} eat something`);
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`);
    }
}

//继承
class Student extends Person {
    constructor (name, age, number) {
        super(name, age);//交给父类构造函数
        this.number = number;//子类单独处理
    }
    study() {
        alert(`${this.name} study ${this.number}`);
    }
}

let xiaoming = new Student("xiaoming", 10, "A1");
xiaoming.study();
xiaoming.eat();

let xiaohong = new Student("xiaohong", 11, "A2");
xiaohong.study();
xiaohong.eat();