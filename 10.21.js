import input from "./input.js"

const numbers = [2,13,3,7,17,5,11,19,9];
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob'];
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry'];

/* sort()
numbers.sort((a, b) => a - b)

forEach()
numbers.forEach((item) => { console.log(item) })
numbers.forEach((item, index) => { console.log(`${index + 1}. ${item}`) })

map()
numbers.map(item => item - 1)
numbers.map((item, index) => `${index + 1}. ${item}`)

filter()
numbers.filter(item => item > 10)
numbers.filter((item, index) => item > 10 && index > 5)

find() findLast() findIndex() findLastIndex()
numbers.find(item => item > 10)
numbers.find((item, index) => item > 10 && index > 5)

every()
numbers.every(item => item > 0)

some()
numbers.some(item => item % 2 == 0)

reduce()
numbers.reduce((total, item) => total + item)
numbers.reduce((total, item, index) => total + item * 10 **index)
numbers.reduce((total, item) => total + item, 100)
 */


function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
//sortByLengthAsc() - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza
function sortByLengthAsc(arr) {
    return arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
}

function sortFrom15(arr) {
    return arr.sort((a, b) => Math.abs(a - 15) - Math.abs(b - 15));
}

function addAsterisk(arr) {
    return arr.map(item => `*${item}*`);
}

function between5And15(arr) {
    return arr.filter(num => num >= 5 && num <= 15);
}

function isAllOdd(arr) {
    return arr.every(num => num % 2 !== 0);
}

function hasEven(arr) {
    return arr.some(num => num % 2 === 0);
}

function sigma(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
}

