async function ret() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('foo'), 1000)
  })

  let result = await promise

  return result
}
module.exports = ret
