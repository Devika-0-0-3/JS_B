var person={name:"Devika",age:22,place:"Delhi",
    display: function(){
    var name="Akived"
    console.log(this.name)//this refers to the object
    console.log(name)//name refers to the local variable
}}
person.dob="21-12-2000";

person.displayAge=function(){
    console.log(this.age);
}

//name,age,place=properties
console.log(person.name);
console.log(person['age']);
for(i in person){
    console.log(i+":"+person[i]);
}
console.log(person.display());
//object inside object
console.log(person.displayAge());
//person object cannot be  copied and change to different values like done in class and object model.
//Object constructors is used to create multiple objects with same properties and methods.