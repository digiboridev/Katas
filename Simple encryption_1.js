function encrypt(text, n) {
    if (n <= 0) {
        return (text)
    } else {
        let a = text.split('')
        let rem = ''
    
        for (let i = 0; i < a.length; i += 1) {
            rem += a.splice(i, 1)
        }

        return encrypt((a.join('') + rem),--n)
    }
}

function decrypt(encryptedText, n) {

}




console.log(encrypt("This is a test!", 0))
console.log(encrypt("This is a test!", 1))
console.log(encrypt("This is a test!", 2))
console.log(encrypt("This is a test!", 3))
console.log(encrypt("This is a test!", 4))
console.log(encrypt("This is a test!", -1))