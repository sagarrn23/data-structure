class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // add elements to the stack
    push(elem) {
        this.items[this.count] = elem;
        this.count++;
        console.log(this.items);
        
    }

    pop() {

    }

    size() {

    }

    peek() {

    }

    isEmpty() {

    }

    print() {

    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
