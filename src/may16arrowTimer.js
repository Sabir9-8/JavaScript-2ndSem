let obj1 = {
    userName: "Sachin",
    showData: function () {
        console.log(this); // obj
        //timer event from browser :: window
        setTimeout(function() {
            console.log(this);//window
            console.log(this.userName);//undefined
            
        }, 3000)
        
    }
};
obj1.showData();

let obj2 = {
    userName: "Sachin",
    showData: function () {
        console.log(this); // obj
        //timer event from browser :: window
        setTimeout(() => {//for arrow function this is determined by the lexical scope of the function (not how it's called).
            //arrow fn is defined inside showData's lexical scope, in show data this is obj so here also this->obj
            console.log(this);//obj
            console.log(this.userName);//Sachin
            
        }, 3000)
        
    }
}
obj2.showData();