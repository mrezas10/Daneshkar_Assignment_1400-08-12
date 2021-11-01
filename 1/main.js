function searchInObject (obj , num) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if(searchInObject(obj[key], num))
                return true
        }
        else if (obj[key] === num) {
            return true
        }
    }
    return false
}

const object = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hi'
                }
            }
        }
    }
}

console.log(searchInObject(object , 20))