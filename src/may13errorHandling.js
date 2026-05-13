class NumberTypeError extends Error
{
    constructor (message) {
        super(message);
        this.name = "NumberTypeError";
    }
}
class InvalidAgeError extends Error
{
    constructor (message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}
document.querySelector("#btn").addEventListener ("click",
    function(event) {
        let {value: userAge}= document.getElementById("userAge")
        
        //console.log(parseInt(userAge))//NaN
        //console.log(typeof NaN)//Number
        try {
            if (userAge === "") {
                throw new NumberTypeError("Entered value is not an age...");
            }
            else if (parseInt(userAge) < 18 || parseInt(userAge) > 70) {
                throw new InvalidAgeError("User is not eligible for Driving License...")
            }
            else {
                console.log("Applicant is eligible...")
            }
        } catch (error) {
            if (error instanceof NumberTypeError) {
                console.error(error.name + ": " + error.message);
            }
            else if (error instanceof InvalidAgeError) {
                console.warn(error.name + ": " + error.message);
            }
        }
    }
)