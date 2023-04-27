{
    const fruits: string[] = [
        "apple",
        "banana",
        "cherry",
        "date",
        "elderberry",
    ];

    console.log("Array in it's initial state:");
    console.log(fruits.toString(), "\n");

    fruits.push("strawberry");
    console.log(
        "Array after adding another fruit named strawberry at the end of fruits array"
    );
    console.log(fruits.toString(), "\n");

    fruits.unshift("kiwi");
    console.log(
        "Array after adding another fruit named kiwi at the start of fruits array"
    );
    console.log(fruits.toString(), "\n");

    fruits.splice(5, 1, "blueberry");
    console.log(
        "Array after deleting 1 element on index 5 and replacing it with another fruit named blueberry"
    );
    console.log(fruits.toString());
}
