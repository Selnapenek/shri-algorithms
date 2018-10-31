export function binarSearch(arr, el) {
    if(arr.length == 0){
        return -1;
    }

    let array = arr;
    let index = parseInt(array.length / 2);
    let element = el;
    let result = undefined;
    let counter = 0;

    for (let i = index; result == undefined;) {

        let minLimit = 0;

        if (array.length == 1 && array[0] != element) {
            result = -1;
        } else if (array[i] == element) {
            result = counter + i;
        } else if (element > array[i]) {
            array = array.slice(i);
            counter += i;
            minLimit = i;
            i = parseInt(array.length / 2);
        } else {
            array = array.slice(minLimit, i);
            counter += minLimit;
            i = parseInt(array.length / 2);
        }
    }
    return result;
}

assert.equal(binarSearch([], 10), -1);

assert.equal(binarSearch([10], 10), 0);

assert.equal(binarSearch([1, 10], 10), 1);

assert.equal(binarSearch([1, 10], 1), 0);


assert.equal(binarSearch([1, 10, 100], 1), 0);

assert.equal(binarSearch([1, 10, 100], 10), 1);

assert.equal(binarSearch([1, 10, 100], 100), 2);



assert.equal(binarSearch([1, 10, 100, 1000], 1), 0);

assert.equal(binarSearch([1, 10, 100, 1000], 10), 1);

assert.equal(binarSearch([1, 10, 100, 1000], 100), 2);

assert.equal(binarSearch([1, 10, 100, 1000], 1000), 3);


