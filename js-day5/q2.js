function flattenObject(obj) {
  var result = {};

  function helper(current, parentKey) {
    for (var key in current) {
      if (current.hasOwnProperty(key)) {
        var newKey = parentKey ? parentKey + "." + key : key;

        if (
          typeof current[key] === "object" &&
          current[key] !== null
        ) {
          helper(current[key], newKey);
        } else {
          result[newKey] = current[key];
        }
      }
    }
  }

  helper(obj, "");
  return result;
}


const obj = {
  name: 'John',
  address: {
    city: 'NYC',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  hobbies: ['reading', 'gaming']
};

console.log(flattenObject(obj));
