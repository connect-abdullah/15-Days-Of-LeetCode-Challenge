/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let minPrice = Infinity; // Initialize to a very high value
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update the minimum price seen so far
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice); // Update the max profit
        }
    }

    return maxProfit;
}
