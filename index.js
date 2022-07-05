// Code your solution here
function findMatching(arr, str) {
    let match = arr.filter(Element => Element.toLowerCase() === str.toLowerCase());
    return match
}

function fuzzyMatch(arr, str) {
    let match = arr.filter(element => element[0] === str[0])
    return match
}

function matchName(arr, str) {
    let match = arr.filter(Element => Element.name === str)
    return match
}