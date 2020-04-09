const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach((item) => callback(item))
      } else {
        for (let key in collection) {
          callback(collection[key])
        }
      }
      return collection
    },

    map: function (collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
        collection.forEach((item) => {
          return newCollection.push(callback(item))
        })
      } else {
        Object.keys(collection).forEach(function (key) {
          return newCollection.push(callback(collection[key]))
        })
      }
      return newCollection
    },

    reduce: function (collection, callback, acc) {
      let total
      let i

      if (!!acc) {
        total = acc
        i = 0
      } else {
        total = callback(collection[0], collection[1])
        i = 2
      }
      for (i; i < collection.length; i++) {
        total = callback(total, collection[i])
      }
      return total
    },

    find: function (collection, predicate) {
      let i = 0
      for (i; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }
    },

    filter: function (collection, predicate) {
      let newCollection = []
      collection.forEach((item) => {
        if (predicate(item)) {
          return newCollection.push(item)
        }
      })
      return newCollection
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function (collection, n) {
      let i
      if (!!n) {
        i = n
        return collection.slice(0, i)
      } else {
        return collection[0]
      }
    },

    last: function (collection, n) {
      let i
      if (!!n) {
        i = n
        return collection.slice(1).slice(-i)
      } else {
        return collection[collection.length - 1]
      }
    },

    compact: function (array) {
      let newArray = []
      array.forEach((item) => {
        if (!!item) {
          return newArray.push(item)
        }
      })
      return newArray
    },

    sortBy: function (array, callback) {
      let newArray = []
      console.log(array)
      array.forEach((item) => newArray.push(item, callback(item)))
      console.log(newArray)
      if ()
    },


    functions: function () {

    },


  }
})()

fi.libraryMethod()
