const withResolve = (api) => {
  return new Promise((resolve) => {
    api()
      .then((res) => {
        resolve([null, res])
      })
      .catch((err) => {
        resolve([err, null])
      })
  })
}

module.exports = {
  withResolve
} 
