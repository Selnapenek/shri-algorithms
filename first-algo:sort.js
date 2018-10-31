export function selectionSort( arr ) {
    let array = [...arr];
    let sortedArray = new Array();
    const length = array.length;

    for( let i = 0; i < length; i++) {
        let currentIndex = i;
        let curMinElementIndex = 0;

        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[curMinElementIndex]) {
                curMinElementIndex = j;
            }
        }

        let currentElement = array.splice(curMinElementIndex, 1)[0];
        sortedArray[currentIndex] = currentElement;
    }
    return sortedArray;
}


export function insertionSort( arr ) {
    let array = arr;
    let sortedArray = new Array();
    const length = array.length;
    for( let i = 0; i < length; i++) {
        let curMaxElementIndex = sortedArray.length;
        let currentElement = array.splice(0, 1)[0];

        sortedArray.push(currentElement);

        for (let j = 0; j < sortedArray.length; j++) {
            if (sortedArray[j] > sortedArray[curMaxElementIndex]) {
                tmp = sortedArray[j];
                sortedArray[j] = sortedArray[curMaxElementIndex];
                sortedArray[curMaxElementIndex] = tmp;
            }
        }
    }
    return sortedArray;
}
let arr = [1, 4, 0, 2, 5];

assert.equal(insertionSort(arr), [ 0, 1, 2, 4, 5]);
assert.equal(selectionSort(arr), [ 0, 1, 2, 4, 5]);


