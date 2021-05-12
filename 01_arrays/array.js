// Array implementation
class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    if (index >= 0) {
      delete this.data[index];

      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }

      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

const arr = new Array();
arr.push("Apple");
arr.push("Mango");
arr.push("Grapes");
arr.push("Apricots");
arr.delete(1);
arr.delete(0);
console.log(arr);
