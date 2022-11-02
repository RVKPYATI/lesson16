class First {
    constructor() {
        
    }
    hello() {
        console.log("Привет я метод родителя!");
    }
}

class Second extends First {
    constructor() {
        super();  
    }
    test() {
        super.hello();
        console.log("А я следующий метод");
    }
}

const example = new Second();

example.test();