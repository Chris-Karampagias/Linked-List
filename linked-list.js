class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  at(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  contains(value) {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp.next) {
      if (temp.value == value) {
        return true;
      }
      temp = temp.next;
    }
    return null;
  }

  find(value) {
    if (!this.head || !this.contains(value)) {
      return null;
    }
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (temp.value == value) {
        return i;
      }
      temp = temp.next;
    }
  }

  set(index, value) {
    let temp = this.at(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insertAt(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index == 0) {
      return this.unshift(value);
    } else if (index == this.length - 1) {
      return this.push(value);
    }
    const newNode = new Node(value);
    let temp = this.head;
    for (let i = 0; i <= index - 2; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  removeAt(index) {
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }
    let before = this.at(index - 1);
    if (before) {
      let temp = before.next;
      before.next = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
    return false;
  }

  toString() {
    if (!this.head) {
      console.log(null);
      return;
    }
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(temp.value);
      temp = temp.next;
    }
    console.log("null");
    return;
  }
}
