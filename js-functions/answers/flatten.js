const exampleArray1 = [1,2,[3,4, [5,6,7], 8], 9, 10];

function flatten(arr) {
    let output = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            output = output.concat(flatten(item));
        } else {
            output.push(item)
        }
    }

    return output;
}

console.log(flatten(exampleArray1))