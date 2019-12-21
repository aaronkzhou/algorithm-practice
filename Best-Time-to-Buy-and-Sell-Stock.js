function maxProfit(prices) {
    let profit = 0
    let i = 0
    while (i < prices.length) {
        let newProfit
        let max = Math.max(...prices.slice(i + 1, prices.length))
        console.log(prices.slice(i + 1, prices.length))
        console.log(prices.length - i - 1)
        console.log(prices.slice(i + 1, prices.length))
        if (max > prices[i]) {
            newProfit = max - prices[i]
        }
        if (newProfit > profit) profit = newProfit
        i++
    }
    console.log(profit)
    return profit
};

maxProfit([7, 1, 5, 3, 6, 4])