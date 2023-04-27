{
    const calculateFactorial = function (input: number): number {
        if (input <= 1) return 1;
        else return input * calculateFactorial(input - 1);
    };

    console.log(calculateFactorial(3));
    console.log(calculateFactorial(4));
    console.log(calculateFactorial(5));
}
