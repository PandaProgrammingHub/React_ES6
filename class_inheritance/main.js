"use strict"

class User{
  constructor(username, email, password){
      this.username = username;
      this.email = email;
      this.password = password;
  }

  static sataticFun(){
    console.log('satatic functoin called');
  }

  register(){
    console.log(this.username+' is now registered');
  }
}

let newUser1 = new User('jon snow', 'jon@email.com', '12345');
// newUser1.register();
// User.sataticFun();

class Member extends User{
  constructor(username, email, password, description){
    super(username, email, password);
    this.description = description;
  }

  getDescription(){
    console.log(this.username+' is also referred to as '+this.description);
  }
}

let newUser2 = new Member('Tyrion Lannister', 'Tyrion@gmail.com', '123456', 'the Halfman');

newUser2.getDescription();
newUser2.register();