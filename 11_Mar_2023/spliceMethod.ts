{
    let marks: number[] = [78, 98, 65, 98];
    function spliceArray(
        arr: number[] | string[],
        startIndex: number,
        deleteCount: number,
        ...items: (number | string)[]
    ) {
        const len = arr.length;
        if (startIndex < 0) startIndex = len + startIndex;
        if (startIndex < 0) startIndex = 0;
        if (startIndex > len) startIndex = len;
    }
    console.log(marks.splice(-9));
    console.log(marks);
}
