const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++) {
        fn(newCollection[i])
      }

      return collection
    
    },

    map: function(collection, fn) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

        const newArray = []

        for (let i = 0; i < collection.length; i++) {
          newArray.push(fn(collection[i]))
        }

        return newArray
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)

      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      let len = collection.length

      for (let i = 0; i < len; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predictate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++)
        if (predictate(collection[i])) return collection[i]

        return undefined
    },

    filter: function(collection, predictate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      let newArray = []

      for (let i = 0; i < collection.length; i++) {
        if (predictate(collection[i])) newArray.push(collection[i])
      }
      return newArray
    },

    size: function(collection) {
      if (collection instanceof Array) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
      
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, n=false){
      return (n) ? collection.slice(collection.length - n, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const badItems = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(item => !badItems.has(item))
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b){
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArray=[]){
      if (!Array.isArray(collection)) return newArray.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArray)
        }
      }
      return newArray
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
