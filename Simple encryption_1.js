function encrypt(text, n) {
    if (!text || n <= 0) return text;
    while (n--) {
        let ans = '';
        for (let i = 1; i < text.length; i += 2) {
            ans += text[i];
        }
        for (let i = 0; i < text.length; i += 2) {
            ans += text[i];
        }
        text = ans;
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
        let j = 0;
        for (let i = 1; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++];
        }
        for (let i = 0; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++];
        }
        encryptedText = ans.join('');
    }
    return encryptedText;
}


console.log(encrypt("This is a test!", 0));
console.log(encrypt("This is a test!", 1));
console.log(encrypt("This is a test!", 2));
console.log(encrypt("This is a test!", 3));
console.log(encrypt("This is a test!", 4));
console.log(encrypt("This is a test!", -1));
console.log(encrypt("This kata is very interesting!", 1));

console.log(decrypt("This is a test!",0))
console.log(decrypt("hsi  etTi sats!",1))
console.log(decrypt("s eT ashi tist!",2))
console.log(decrypt(" Tah itse sits!",3))
console.log(decrypt("This is a test!",4))
console.log(decrypt("This is a test!",-1))
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig",1))