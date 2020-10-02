const { bad_data,  } = require('../utils/exception')

const verityType = (req, res, next) => {
  const typeInt = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  if (!typeInt.includes(Number(req.params.value1))) return res.send(bad_data.info).status(bad_data.status).end()
  if (!typeInt.includes(Number(req.params.value2))) return res.send(bad_data.info).status(bad_data.status).end()
  if (!typeInt.includes(Number(req.params.value3))) return res.send(bad_data.info).status(bad_data.status).end()
  if (!typeInt.includes(Number(req.params.value4))) return res.send(bad_data.info).status(bad_data.status).end()
  next()
}

module.exports = {
  verityType
}