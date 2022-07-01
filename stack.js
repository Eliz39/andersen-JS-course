class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}
class Stack {
    constructor(maxSize){
        this.first = null;
        this.last = null;
        this.size = 0;

        if(!maxSize) {
          this.maxSize = 10;
        } else if(typeof maxSize === 'number') {
          this.maxSize = maxSize;
        } else if(typeof maxSize !== 'number') {
          throw new Error('Maximum length must be a number');
        }
    }

    push(elem){

    	if(this.size === this.maxSize) {
          throw new Error('Stack is full');
      }

        let node = new Node(elem)

        if(!this.first) {

          this.first = node
          this.last = node
        } else {
           let temp = this.first
           this.first = node
           this.first.next = temp
        }

       this.size++

     return this.size
    }

    pop(){

    if(!this.first) {
       throw new Error('Stack is empty');
    }

    let temp = this.first

    if(this.first === this.last) {
        this.last = null;
    }

    this.first = this.first.next;

    this.size--

    return temp.value;

  }

   peek() {

    if(!this.first) {
       return null;
    }

    let temp = this.first;

    return temp.value;

  }

  isEmpty() {
    return this.size === 0;
  }

  iterate() {

    let temp = this.first;

    if(this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    return temp.value;

  }

  toArray() {
    let items = [];
    for (let i = 0; i < this.size; i++) {
       items.push(this.iterate());
    }

    return items.reverse();
  }

  fromIterable(iterable) {
        if(typeof iterable[Symbol.iterator] === 'function') {
          let newStack = new Stack(iterable.length);
          for (let key of iterable) {
            newStack.push(key);
          }

          return newStack;
        } else {
          throw new Error('Not iterable');
        }

      }

}

  module.exports = {
    Stack, Node
  };