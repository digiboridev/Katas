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


function decrypt(text, n) {
    if (n <= 0) {
        return (text)
    } else {
        let a = text.split('').reverse()
        let rem = ''
    
        for (let i = a.length / 2, h = a.length; i > 0; i-- , h--) {
            rem += a[i - 1]
            rem += a[h - 1]
        }
        console.log(text , rem , n)
        return decrypt(rem.toString(),--n)
    }
}





console.log(encrypt("12345678", 0))
console.log(encrypt("12345678asdf", 1))
console.log(encrypt("12345678", 2))
console.log(encrypt("12345678", 3))
console.log(encrypt("12345678", 4))
console.log(encrypt("12345678", -1))

console.log('de')

console.log(decrypt("24681357", 1))
console.log(decrypt("hsi  etTi sats!s", 2))
// console.log(decrypt("s eT ashi tist!", 3))
// console.log(decrypt(" Tah itse sits!", 4))
// console.log(decrypt("This is a test!", -1))
// console.log(decrypt("This is a test!", 0))

