const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let variable = []
      if (collection instanceof Array) {
        variable = collection
      } else {
        variable = Object.values(collection)
      }
      for (let i = 0; i < variable.length; i++) {
        callback(variable[i])
      }
      return collection
      },
    
    map: function(collection, callback) {
      let variable = []
      let res = []
      if (collection instanceof Array) {
        variable = collection
      } else {
        variable = Object.values(collection)
      }
      for (let i = 0; i < variable.length; i++) {
        res.push(callback(variable[i]))
      }
      return res
    },

    reduce: function(collection, callback, acc) {
      let variable = []
      let rest = 0
      let accu = 0
      if (collection instanceof Array) {
        variable = collection
      } else {
        variable = Object.values(collection)
      }
      if (!!acc) {
        rest = acc
      }
      for (let i = 0; i < variable.length; i++) {
        rest += callback(accu, variable[i])
      }
      return rest
    },

    find: function(collection, predicate) {
      let variable = []
      let result = 0
      if (collection instanceof Array) {
        variable = collection
      } else {
        variable = Object.values(collection)
      }
      for (let i=0; i<variable.length; i++) {
        if (!!predicate(variable[i])) {
          result = variable[i]
          break
        } else {
          result = undefined
        }
      }
      return result
    },

    filter: function(collection, predicate) {
      let variable = []
      let result = []
      if (collection instanceof Array) {
        variable = collection
      } else {
        variable = Object.values(collection)
      }
      for (let i=0; i<variable.length; i++) {
        if (predicate(variable[i])===true) {
          result.push(variable[i])
        }       
      }
      return result
    },

    size: function(collection) {
      let variable = []
      if (collection instanceof Array) {
        variable = collection
      } else {
        variable = Object.values(collection)
      }
      return variable.length
    },

    first: function(array, endingNum=0) {
      if (endingNum === 0) {
        return array[endingNum]
      } else {
        return array.slice(0, endingNum)
      }
    },

    last: function(array, num=0) {
      if (num === 0) {
        return array[array.length-1]
      } else {
        return array.slice(-num)
      }
    },

    compact: function(array) {
      let result = []
      for (let i=0; i<array.length; i++) {
        if (!!array[i]) {
          result.push(array[i])
        }
      }
      return result
    },

    sortBy: function(array, callback) {
      let newArr = []
      for (let i = 0; i<array.length; i++) {
        newArr.push(callback(array[i]))
      }
      if (typeof array[0] === 'number' && callback(array[0]) === array[0]) {
        let sorted = newArr.sort(function(a, b){return a-b})
        // console.log(sorted)
        return sorted
      } else if (typeof array[0] === 'number' && callback(array[0]) !== array[0]) {
        // console.log(newArr)
        let myObj = array.reduce((a, key) => Object.assign(a, { [key]: Math.sin(key) }), {})
        let valuesSorted = Object.values(myObj).sort()
        let newArray = []
        for (let i=0; i<valuesSorted.length; i++) {
          
        }
        return newArray

      } 
      else {
        let sorted = newArr.sort()
        return sorted
      } 
    },

    flatten: function(array, bool) {
      const stack = [...array]
      console.log(stack)
      const res = []
      while(stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
          stack.push(...next);
        } else {
          res.push(next);
        }
      }
      return res.reverse();
    },

    uniq: function(array) {
      let result = []
      for (let i=0; i<array.length; i++) {
        if (!array.find(array[i])) {
          result.push(array[i])
        }
      }
      console.log(result)
      return result

    },

    keys: function(obj) {
      const arrKeys = []
      for (let [key, value] of Object.entries(obj)) {
        arrKeys.push(key)
      }
      return arrKeys
    },

    values: function(obj) {
      const arrValues = []
      for (let [key, value] of Object.entries(obj)) {
        arrValues.push(value)
      }
      return arrValues
    },


    functions: function(obj) {
      let funct = []
      for (let [key, value] of Object.entries(obj)){
        if (value !== '') {
          funct.push(key)
        }
      }
      return funct.sort()
    },


  }
})()

fi.libraryMethod()
