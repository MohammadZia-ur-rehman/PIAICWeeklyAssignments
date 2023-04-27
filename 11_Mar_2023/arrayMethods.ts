{
    let studentName: string[] = ["Muhammad", "Zia", "Ur", "Rehman"];
    let fatherName: string[] = ["Muhammad", "Yaseen"];
    let motherName: string[] = ["Jannat", "khatoon"];

    console.log(studentName.concat(fatherName));
    console.log(studentName.concat(fatherName, motherName));

    // (number of element to copy, from which index, to which index)
    console.log([...studentName].copyWithin(3, 1, 2));

    let fruits = ["Apple", "Banana", "Kiwi", "Orange", "Mango", "Melon"];
    // Fill all the elements with a value
    console.log([...fruits].fill("water"));
    // Value, Start, End to fill the value
    console.log([...fruits].fill("Water", 2, 3));

    // To iterate over array using key-value pair
    for (let name of studentName.entries()) {
        console.log(name[1]);
    }

    // return true if array passes test for each element
    // It expects currentValue, index (optional), array(optional)
    console.log(
        studentName.every((val) => {
            return val.includes("a") ? true : false;
        })
    );

    // return the array containing elements which pass the test
    // It expects currentValue, index (optional), array(optional)
    console.log(
        [...studentName].filter((val) => (val.includes("a") ? true : false))
    );

    // Find the value of the first element containing "Zi" string
    // It expects currentValue, index (optional), array(optional)
    console.log(
        `Value of \"Zia\" using index function is : ${studentName.find((val) =>
            val.includes("madd") ? true : false
        )}`
    );

    // Find the index of the first element containing "Zi" string
    // It expects currentValue, index (optional), array(optional)
    console.log(
        `index of \"Zia\" using findIndex function is: ${studentName.findIndex(
            (val) => (val.includes("Zi") ? true : false)
        )}`
    );

    let marks: number[] = [1, 2, 3, 4];
    let sum = 0;
    marks.forEach(function (item) {
        sum += item;
    });
    console.log(`Sum of an array using forEach method is ${sum}`);

    // object, mapFunction(o), thisValue(o)
    let names: string[] = Array.from(["Muhammad", "Zia", "Ur", "Rehman"]);

    // element and index to start search from return boolean
    console.log(
        `\"Zia\" is found in studentArray: ${names.includes("Zia", 0)}`
    );

    // element, index to start search from return index
    console.log(
        `indexOf \"Zia\" in studentArray is ${names.indexOf("Zia", 0)}`
    );

    let name: string = "Muhammad Zia Ur Rehman";
    console.log(`names is ${Array.isArray(names) ? "an" : "not an"} array`);
    console.log(`name is ${Array.isArray(name) ? "an" : "not an"} array`);

    // separator(o), by default comma(,)
    console.log(fruits.join("/"));

    // Array iterator object using keys of an array
    for (let key of fruits.keys()) {
        console.log(fruits[key]);
    }

    // element, start:number searching from right to left
    console.log(fruits.lastIndexOf("Kiwi"));

    fruits.length = 5;
    console.log(fruits.length, " : ", fruits);

    // Return a new array by adding 5 to all element values:
    console.log(marks.map((num) => num + 5));

    // Remove (pop) the last element and returns it
    console.log(`Poped an element : ${marks.pop()}`);

    // Add items into the end of an array
    console.log(`Pushed two elements : ${marks.push(84, 75)}`);

    // Reverse the order of elements in an array
    console.log(`Reverse order is : ${marks.reverse()}`);

    // Removes the first item of an array
    console.log(`Shift Function : ${marks.shift()}`);

    // Add the elements in the start of an array
    console.log(fruits.unshift("Melon", "Berry"));

    // Select elements from an array
    console.log(fruits.slice(2, 4));

    // Check if any value passes the test
    console.log(
        `Result of some function is : ${fruits.some((val) =>
            val.includes("go") ? true : false
        )}`
    );

    // Sort the numbers in ascending order
    console.log(`Marks in ascending order : ${marks.sort((a, b) => a - b)}`);

    // Sort the numbers in descending order
    console.log(`Marks in descending order : ${marks.sort((a, b) => b - a)}`);

    console.log(fruits);
    console.log(fruits.splice(2, 1, "Fruit1", "Fruit2"));
    console.log(fruits);

    console.log(fruits.toString());
}
