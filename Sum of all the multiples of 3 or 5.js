// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


function findSum(n) {
    let ans = 0;
    while (n) {
        if (!(n % 5)) {
            ans += n
        } else if (!(n % 3)) {
            ans += n
        }
        n--
    }
    return ans
}

console.log(findSum(5))
console.log(findSum(10))