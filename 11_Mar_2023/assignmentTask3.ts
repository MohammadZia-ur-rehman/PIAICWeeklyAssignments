{
    class InvalidPercentageError extends Error {
        constructor(message: string) {
            super(message);
            this.name = "InvalidPercentageError";
        }
    }
    const calculateDiscount = function (
        productPrice: number,
        discountPercentage: number
    ): number {
        if (discountPercentage >= 50)
            throw new InvalidPercentageError(
                "The discountPercentage should not be greater or equal to 50"
            );
        else return productPrice * (discountPercentage / 100);
    };

    let productPrice: number = 1000;
    let discountPercentage: number = 50;
    let discountPrice: number;
    let finalPrice: number;

    let percentageIsInvalid = true;
    do {
        try {
            discountPrice = calculateDiscount(productPrice, discountPercentage);
            percentageIsInvalid = false;
            finalPrice = productPrice - discountPrice;
            console.log(`Product Price = ${productPrice}`);
            console.log(`Discount Perentage = ${discountPercentage}`);
            console.log(`Discount Price = ${discountPrice}`);
            console.log(`Final Price = ${finalPrice}`);
        } catch (e) {
            if (e instanceof InvalidPercentageError) {
                console.log(e.message);
            }
            console.log("Adjusting the discountPercentage to make it valid");
            discountPercentage = discountPercentage - (discountPercentage - 49);
        }
    } while (percentageIsInvalid);
}
