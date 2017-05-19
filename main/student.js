let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,class){
Person.call(this,name,age)
  this.class=class
    introduce:function(){
    var intro = "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.class+"."
    return intro
    }
}
