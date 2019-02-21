import Cat from Cat.js

class Tiger{
  constructor(name,sex,age){
    super();
    this.name=name;
    this.sex=sex;
    this.age=age;
  }
  
  bite(){
    console.log(this.name + ": bite!");
  }
}

export Tiger
