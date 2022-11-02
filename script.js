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
    hello() {
        super.hello();
        console.log("А я следующий метод");
    }
}

const example = new Second();

example.hello();