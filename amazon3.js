function threeProductSuggestions(numProducts, repository, customerQuery) {
    // WRITE YOUR CODE HERE
    let i = 2
    let result = []
    console.log(customerQuery.length)
    while (i < customerQuery.length + 1) {
        const foo = repository
        let str = customerQuery.slice(0, i);
        str = str.toLowerCase()
        console.log(str)
        console.log(foo)
        let bar = foo.filter((item) => {
            console.log(item)
            return item.toLowerCase().includes(str)
        })
        bar.sort()
        if (bar.length >= 5) bar = bar.slice(0, 3)
        if (bar.length !== 0) result.push(bar)
        console.log(bar)
        i = i + 1
    }
    console.log(result)
    return result
}

threeProductSuggestions(5, ['code', 'codePhone', 'coddle', 'coddles', 'codes'], 'coddle')
