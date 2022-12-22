const NAMES = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];

function sortNames(arr) {
    let nameSortedByAlphaOrder = arr.sort();
    return nameSortedByAlphaOrder;
}
console.log(sortNames(NAMES));