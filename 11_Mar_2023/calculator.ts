// Calculator Assignment
{
    type Operators = "+" | "-" | "*" | "/";
    const calculator = function (
        operand1: number,
        operand2: number,
        operator: Operators
    ): number {
        switch (operator) {
            case "+":
                return operand1 + operand2;
                break;
            case "-":
                return operand1 - operand2;
                break;
            case "*":
                return operand1 * operand2;
                break;
            case "/":
                return operand1 / operand2;
                break;
        }
    };

    console.log(calculator(5, 8, "+"));
}
