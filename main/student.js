let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,kclass){
Person.apply(this,arguments)
  this.kclass=kclass
    this.introduce=function(){
    var intro = "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.class+"."
    return intro
    }
}
//Student.prototype = new Person()
