function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

function genNumber() {
    let number = [];
    for(let i = 0; i < 10; i++) {
        number.push(i.toString());
    }
    return number;
}

export const CHARS = [
    ...genCharArray('a', 'z'), 
    ...genCharArray('A','Z'), 
    ...genNumber()
];