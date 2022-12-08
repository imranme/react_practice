 class Humman {
    constructor(q){
        this.age= q;
    }
 }
 
 class User extends Humman{
    constructor(x,y) { 
        super(12);
        this.firstName= x;
        this.lastName= y;
    }

    print(){
        console.log(this.firstName, " ", this.lastName);
    }
 }

// javascript 

// const user = {
//     firstName: "Tushar",
//     lastName: "Hossain",
//     print: () => {
//         console.log(this.firstName, "", this.lastName);
//     }
// };


// const user1 = {
//     firstName: "rotu",
//     lastName: "tushar",
//     print: () => {
//         console.log(this.firstName, "  ", this.lastName);
//     }
// }

const userSuper = new User("Khan", "boss");
const userNormal = new User ("he","she");
console.log(userSuper);


// this object 