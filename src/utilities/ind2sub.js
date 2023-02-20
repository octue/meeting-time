const ind2sub = (sizes, index) => {
  const cumprod = sizes.reduce(
    function (acc, n) {
      return acc.concat(acc[acc.length - 1] * n)
    },
    [1]
  )
  return sizes.map(function (size, i) {
    return Math.floor(index / cumprod[i]) % size
  })
}
export default ind2sub
