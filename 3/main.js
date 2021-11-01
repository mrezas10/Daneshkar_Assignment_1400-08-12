const integerCount = function (arr) {
    let count = 0
    for (let key of arr)
    {
        if (Array.isArray(key))
            count = count + integerCount(key)
        else if (Number.isInteger(key))
            count++
    }
    return count
}
let arr1 = [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]
console.log(integerCount(arr1))