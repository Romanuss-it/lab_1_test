async function cal(v) {
  return ret(v)
}

async function ret(value) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), 1000)
  })

  let result = await promise

  return result
}
module.exports = cal
