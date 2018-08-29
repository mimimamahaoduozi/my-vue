function getRates (dec, sum = 5) {
  // 总数为整数并且大于0
  // 评分位数字并且大于等于0
  // 评分小于等于总数
  if (typeof sum === 'number' && sum % 1 === 0 && sum > 0 && typeof dec === 'number' && dec >= 0 && dec <= sum) {
    // 把dec四舍五入取整
    // 取整后的dec个 ★ sum-dec个 ☆ => str => return
    let str = ''
    for (let i = 0; i < sum; i++) {
      i < Math.round(dec) ? str += '★' : str += '☆'
    }
    return str
  } else {
    return 'error'
  }
}

console.log(getRates(4.3))
