{
    const average = function (...items: number[]): number {
        let sum = 0;
        for (let item of items) sum += item;
        return sum / items.length;
    };

    let englishMarks: number = 83;
    let urduMarks: number = 79;
    let averageMarks: number = average(englishMarks, urduMarks);

    let grade: string;

    if (averageMarks >= 80) grade = "A";
    else if (averageMarks >= 70) grade = "B";
    else if (averageMarks >= 60) grade = "C";
    else grade = "F";

    console.log(
        `With an average of ${averageMarks} Marks, you have got ${grade} Grade`
    );
}
