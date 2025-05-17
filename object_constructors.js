function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name: "+this.name+" Age: "+this.age)
    }
}
//from function constructor we can create multiple objects

var devika=new Person("Devika",22,"Delhi")
var Akived=new Person("Akived",23,"Mumbai")

devika.display()