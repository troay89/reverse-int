module.exports = function reverse(n) {
    //if (n > 0) {
    //    console.log(n)
    let number = Math.abs(n)
    return (number + '').split('').reverse().join('');
    //} else {
    //    console.log(n)
    //    return `${(n + '').replace('-','').split('').reverse().join('')}`;
    //}
}
