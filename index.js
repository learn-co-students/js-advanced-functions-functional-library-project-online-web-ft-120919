const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let array
      Array.isArray(collection) ? array = collection : array = Object.values(collection)
      array.forEach((value, index) => 
        callback(value, index, array)
      )
      return collection
    },

    map: function(collection, callback) {
      let array
      Array.isArray(collection) ? array = collection : array = Object.values(collection)
      return array.map((value, index) => callback(value, index, array))
    },

    reduce: function(array, callback, acc = 0) {
      return array.reduce((acc, value) => {return callback(acc, value, array)}, acc)
    },

    functions: function(object) {
      let keys = Object.keys(object)
      let bobject = {}
      keys = fi.sortBy(keys, (x)=>x)
      keys.forEach(function(key) {
        if (!(object[key] === "")) {
          bobject[key] = object[key]
        }
      })
      return Object.keys(bobject)
    },

    find: function(collection, predicate) {
      return collection.find(predicate)
    },

    filter: function(collection, predicate) {
      return collection.filter(predicate)
    },

    size: function(collection) {
      let array
      Array.isArray(collection) ? array = collection : array = Object.keys(collection)
      return array.length
    },

    first: function(array, n=1) {
      let brray = array.slice(0,n)
      return brray.length === 1 ? brray[0] : brray
    },

    last: function(array, n=1) {
      let brray = array.slice(0-n)
      return brray.length === 1 ? brray[0] : brray
    },

    compact: function(array) {
      let brray = []
      array.forEach(value => {
        if (!!value) {
          brray.push(value)
        }
      })
      return brray
    },

    sortBy: function(array, callback) {
      return array.concat().sort((x,y) => {
        let newX = callback(x)
        let newY = callback(y)
        if (newX > newY) {
          return 1
        } else {
          return -1
        }
      })
    },

    flatten: function(array, shallow=false) {
      if (shallow == false) {
        return array.flat(Infinity)
      } else {
        return array.flat()
      }
    },

    uniq: function(array, isSorted=false, callback=(x) => x) {
      let brray = []
      array.filter((value, index) => {
        if (!brray.includes(callback(value))) {
          brray.push(callback(value))
        } else {
          brray.push(callback(value))
          array[index] = false
        }
      })
      array = fi.compact(array)
      return array
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    }

  }
})()

fi.libraryMethod()
