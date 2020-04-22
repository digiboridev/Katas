// Rules
//  	1.  The input string will always be lower case but maybe empty.
//     2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

// Example
//     wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
    let arr = [];
    
    for (let i = 0; i < str.length; i++) {
        let b = str.split('');
        if (b[i] == ' ') continue;
        b[i] = b[i].toUpperCase()
        arr.push(b.join(''))
    }
    return arr
}

console.log(wave('wave bichees'))
// console.log(('wave bichees').split(''))