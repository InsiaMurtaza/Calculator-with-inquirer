import inquirer from 'inquirer';
let answer1 = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "Enter Your First Number: "
    },
    {
        type: "list",
        name: "operator",
        message: "Enter the operator: ",
        choices: ["add", "subtract", "multiply", "divide", "percentage", "square_root"]
    }]);
if (answer1.operator == "square_root") {
    let result1 = Math.sqrt(answer1.num1);
    console.log(result1);
}
else {
    let answer2 = await inquirer.prompt([{
            type: "number",
            name: "num2",
            message: "Enter Your Second Number: "
        }]);
    let result2;
    switch (answer1.operator) {
        case "add":
            result2 = answer1.num1 + answer2.num2;
            console.log(result2);
            break;
        case "subtract":
            result2 = answer1.num1 - answer2.num2;
            console.log(result2);
            break;
        case "multiply":
            result2 = answer1.num1 * answer2.num2;
            console.log(result2);
            break;
        case "divide":
            result2 = answer1.num1 / answer2.num2;
            console.log(result2);
            break;
        case "percentage":
            result2 = answer1.num1 / answer2.num2 * 100;
            console.log(result2);
            break;
    }
}
