// Write your code here
module.exports = Person
function person(name,age){
this.mane = name
  this.age = age
  introduce=function(){
    var intro ="My name is "+this.name+". I am "+this.age+" years old."
    return intro
  }
}

