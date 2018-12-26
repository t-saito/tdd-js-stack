class Stack {
  constructor(capacity){
    this.values = new Array(10);
  }

  capacity(){
    return this.values.length;
  }
}

export default Stack;
