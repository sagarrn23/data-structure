class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // add elements to the stack
    push(elem) {
        this.items[this.count] = elem;
        this.count++;
    }

    // remove last element from the stach
    pop() {
        if (!this.count) return;
        this.items.length = this.count - 1;
        this.count--;
    }

    // get size of the stack
    size() {
        return this.items.length;
    }

    // get last element from stack
    peek() {
        return this.items[this.items.length - 1]
    }

    // check if the stack is empty
    isEmpty() {
        if (!this.items.length) {
            return true;
        }
        return false;
    }

    // print the stack
    print() {
        return this.items;
    }

    // clean the stack
    clean() {
        this.count = 0;
        this.items.length = 0
    }
}

const stack = new Stack();