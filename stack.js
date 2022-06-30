class Stack {
    constructor(size) {
      this.top = null;
      if(!this.size) {
        this.size = 10;
      } else if(typeof this.size === 'number') {
        this.size = size;
      } else if(typeof this.size !== 'number') {
        throw new Error('Maximum length must be a number');
      }
    }


     push(elem) {
        let node = new Node(elem);

        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
      }

      pop() {
        this.temp = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return this.temp;
      }

      peek() {
        if(this.size === 0) {
          return null;
        }
        return this.temp;
      }

      isEmpty() {
        return this.size === 0;
      }

      toArray() {
        let stack = [];
        while(this.size >= 0) {
          stack.push(this.top);
          this.top = this.top.previous;
          this.size -= 1;
        }
        return stack;
      }

      static fromIterable(iterable) {
        if(typeof iterable[Symbol.iterator] === 'function') {
          let newStack = new Stack(iterable.length);
          for (let key of iterable) {
            newStack.push(key);
          }
          return newStack;
        }
      }

  }
    class Node {
    constructor(elem) {
     this.elem = elem;
      this.previous = null;
    }
      }

  module.exports = {
    Stack
  };