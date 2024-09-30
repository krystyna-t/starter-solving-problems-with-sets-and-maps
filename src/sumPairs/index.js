/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const diffMap = new Map();
    const result = [];
    for(let num of A){
        const diff = N - num;
        if(diff != num && diffMap.has(diff)){
            result.push([Math.min(num, diff), Math.max(num, diff)])
        }
        else {
            diffMap.set(num)
        }
    }
    return result;
}

module.exports = sumPairs;
