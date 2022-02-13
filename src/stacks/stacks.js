var myStack = function Stack() {
  this.count = 0; // to keep the count of the element in the stack
  this.storgage = {}; // this is where we store the stack

  //to push an element onto the end of the stack
  this.push = function (element) {
    this.storgage[this.count] = element; //  this.storgage[0] = element
    this.count++; // count = count + 1 ==> 1
  };

  // to return the size
  this.size = function () {
    return this.count;
  };

  //to delete the first element in the stack and return the poped elemnt
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storgage[this.count];
    delete this.storgage[this.count];
    return result;
  };

  //return the first value in the stack
  this.peek = function () {
    return this.storgage[this.count - 1];
  };
};

var stack = new myStack();

stack.push("one");
stack.push("two");
stack.push(3);
stack.pop();
stack.peek();
stack.size();

// stack.push(4);

console.log(stack);
