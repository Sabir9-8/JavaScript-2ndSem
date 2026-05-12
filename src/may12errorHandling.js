console.log("Execution starts...");
function display() {
    try {
        console.log("spinner loaded...")
        ;
        ;
        //TypeError
        //console.log(null.toUpperCase());
        ;
        ;
        //ReferenceError
        //console.log(userInput);
        ;
        ;
        ;
        //RangeError
        let arr = new Array(-5);
    }
    catch (error){
        if (error instanceof TypeError) {
            console.error(error.name + ": Type does not support the operation...")
        }
        else if (error instanceof ReferenceError) {
            console.error(error.name + ": Illegal operation, trying to access a variable which is not declared")
        }
        else if (error instanceof RangeError) {
            console.error(error.name + ": value out of range");
            
        }
    }
    finally {
        console.log("must be executed\nEither error handled or not")
    }
}
display();
console.log("terminated normally...");
