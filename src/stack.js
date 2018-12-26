class Stack {
  constructor(capacity){
    if(!capacity){
      this.values = new Array(10);
    } else {
      this.values = new Array(capacity);
    }
  }

  capacity(){
    return this.values.length;
  }
}

export default Stack;
