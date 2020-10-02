const { apiFindRestaurant } = require('../api/call-api')
const { not_found } = require('../utils/exception')

const findRestaurant = async (req, res) => {
  const text = req.params.restaurantName
  const result = await apiFindRestaurant(text)
  if (result.length == 0) res.status(not_found().status).send(not_found().info).end()
  return res.send({ info: result}).status(200).end()
}

const game24 = async (req, res) => {
  const solve24 = (arr) => {
    if(arr.length === 1) {
      return arr[0] === 24;
    }
  
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < arr.length; j++) {
        if(i===j) continue;
        
        var less = Math.min(i,j);
        var more = Math.max(i,j);

        var value1 = arr[i];
        var value2 = arr[j];

        var copy = arr.slice();

        copy.splice(more,1);
        copy.splice(less,1);
  
        var isValid = false;
        isValid = isValid || solve24( [value1+value2, ...copy] );
        isValid = isValid || solve24( [value1-value2, ...copy] );
        isValid = isValid || solve24( [value1*value2, ...copy] );

        if(value2 !==0) {
          isValid = isValid || solve24( [value1/value2, ...copy] );
        }

        if(isValid) return true;
      }
    }
    
    return false;
  }

  const params = [req.params.value1, req.params.value2, req.params.value3, req.params.value4]
  const result = solve24(params)

  return res.send({ info: `${result ? 'YES' : 'NO'}` }).status(200).end()
}

module.exports = {
  findRestaurant, game24
}