class NumberChecker {
    constructor() { }

    // Polymorphic function to check if numbers are odd or even
    checkOddEven(input) {
        if(typeof input =='number'){
            if(input % 2 == 0){
                return "Even";
            }
            else{
                return"Odd";
            }
        }
        else if(Array.isArray(input)){
            let evenOdd =[];
            for(let i = 0; i < input.length; i++){
                if(input[i]%2===0){
                    evenOdd.push("Even");
                }
                else{
                    evenOdd.push("Odd");
                }
            }
            return evenOdd;
        }
        else {
        return "Invalid input";
    }
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
    }
}

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));
// Expected Output: Odd
console.log(numberChecker.checkOddEven(10));
// Expected Output: Even
console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
// Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
console.log(numberChecker.checkOddEven('Hello'));
// Expected Output: Invalid input