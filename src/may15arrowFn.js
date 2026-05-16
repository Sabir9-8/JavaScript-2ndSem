function add(a, b) {
    return a + b;
}
console.log(add(12, 32));
//arrow function
let sum = (a, b) => a+b;
console.log(sum(3, 9));

function square(n) {
    return n * n;
}
console.log(square(4));
//arrow function
let sq = n => n * n;
console.log(sq(9));

function display() {
    console.log(this);//window because it's called by refering global object
    console.log(this.userName);//undefined
}

display();//window.display();

let show = () => {
    console.log(this);//window because it's defined in global lexical scope
    console.log(this.userName);//undefined
}
show();

let obj1 = {
    userName: "sachin",
    showData: function() {
        console.log(this);//obj because it's called by refering obj object
        console.log(this.userName);//sachin
    }
};

obj1.showData();

let obj2 = {
    userName: "sachin",
    showData: () => {
        console.log(this);//window because it's defined in global lexical scope
        console.log(this.userName);//undefined
    }
}

obj2.showData();