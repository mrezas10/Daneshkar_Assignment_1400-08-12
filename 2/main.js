const power = (num, pwr) => {
    if(num === 1 || num === 0)
        return num
    if(pwr === 0)
        return 1
    else if (pwr === 1)
        return num
    return num * power(num , pwr - 1)
}
console.log(power(3 , 4))