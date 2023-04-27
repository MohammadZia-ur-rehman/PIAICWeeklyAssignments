{
    const addition = function (...items: number[]) {
        let sum = 0;
        for (let item of items) sum += item;
        return sum;
    };

    console.log(addition(1, 3, 5, 7));
}
