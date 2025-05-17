class Sample{
    SampleHello(){

        console.log("This is sample hello")
    }
}






class Hello extends Sample{
    constructor(num1,num2){
        super() //call the parent constructor
        //super is used to call the constructor of the parent class
        //super is used to access the properties and methods of the parent class
        this.num1=num1
        this.num2=num2
        }
        hello(){
            console.log("Hello friends"+(this.num1 + this.num2))
        
    }   
}

let hey=new Hello(10,20)
hey.hello()
hey.SampleHello()

