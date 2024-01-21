// Code your solutions in this file
// writeCards(["Charlie", "Samip", "Ali"], "wedding")

function writeCards(arr, event) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(posInt) {
    while (posInt >= 0) {
        console.log(posInt);
        posInt--;
    }
}