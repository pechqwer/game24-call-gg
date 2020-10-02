const axios = require('axios')
const { withResolve } = require('../utils/withResolve')

const apiFindRestaurant = async (text) => {
  const pathApiPlace = `${process.env.PATH_GG}?query=${encodeURIComponent(text)}&key=${process.env.API_KEY}&types=${process.env.RESTAURANT}`
  const api = () => { return axios.get(pathApiPlace) }
  const [error, result] = await withResolve(api)
  if (error) return error
  return result.data.results
}

module.exports = {
  apiFindRestaurant
} 

