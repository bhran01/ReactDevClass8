class A {
    //1.Properties
    name; //only declaration
    surname = 'das'; //both declaration and initialization
    address = ''; // //both declaration and initialization

    //2.Constructor
    constructor() {
        //this.member
        this.name = 'Subhransu';
        this.address = 'Ath';
        this.postal = 'Athgarh'; //we can directly initialize the property that is not even declare in property area
    }
    //3.Methods
    showName() {
        console.log(this.name + this.surname + this.postal);
    }
}

class B extends A{
    friend1;
    friend2 = '';
    constructor(frnd3) {
        super();
        this.friend1 = "raj";
        this.friend2 = "rahul";
        this.friend3 = frnd3;
    }
    listMyFriend() {
        console.log(this.friend1);
        console.log(this.friend2);
        console.log(this.friend3);
        super.showName();
    }
}
//let object=new ClassName();

let obj2 = new B("ramesh");
obj2.listMyFriend();
obj2.showName();
// let obj = new A();
// obj.showName();