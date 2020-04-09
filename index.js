const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        alert(collection[keys[i]], i, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let result = []
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        result.push(callback(collection[keys[i]], i, collection))
      }
      return result
    },

    reduce: function(collection, callback, acc) {
      let keys = Object.keys(collection)

      let result
      if(acc) {
        result = acc
      } else {
        result = collection[keys[0]]
        keys = keys.slice(1)
      }

      for (let i = 0; i < keys.length; i++) {
        result = callback(result, collection[keys[i]], collection)
      }
      return result
    },

    find: function(collection, predicate) {
      let keys = Object.keys(collection)

      for (let i = 0; i < keys.length; i++) {
        //console.log(`q: ${predicate} | i: ${collection[keys[i]]}`)
        if (predicate(collection[keys[i]])) {
          return collection[keys[i]]
        }
      }
    },

    filter: function(collection, predicate) {
      let keys = Object.keys(collection)
      let result = []
      for (let i = 0; i < keys.length; i++) {
        //console.log(`q: ${predicate} | i: ${collection[keys[i]]}`)
        if (predicate(collection[keys[i]])) {
          result.push(collection[keys[i]])
        }
      }
      return result
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, num) {
      let keys = Object.keys(array)
      if (num) {
        //return first n elements
        let result = []
        for (let i = 0; i < num; i++) {
          result.push(array[keys[i]])
        }
        return result
      } else {
        return array[keys[0]]
      }
    },

    last: function(array, num) {
      //console.log(`source array: ${array}`)

      let keys = Object.keys(array)
      //console.log(`keys: ${keys}`)

      if (num) {
        //console.log(`returning last ${num} elements`)
        let result = []

        for (let i = 0; i < num; i++) {
          //console.log(`pushing item: ${array[keys[keys.length-1-i]]}`)
          result.unshift(array[keys[(keys.length - 1 - i)]])
          //console.log(`current result: ${result}`)
        }
        return result
      } else {
        return array[keys[keys.length-1]]
      }
    },

    compact: function(array) {
      let result = []
      for (let e of array) {
        if (e) {
          result.push(e)
        }
      }
      return result
    },

    sortBy: function(array, callback) {
      //console.log(`input array: ${array}`)
      //console.log(`callback function: ${callback}`)
      let result = [...array]

      //console.log(`final result before sort: ${result}`)
      //console.log(`sorted result: ${result.sort(function(a, b){return a - b})}`)
      return result.sort(function(a, b) {
        // console.log(`sort comparison: ${a}, ${b}`)
        return callback(a) - callback(b)
      })
    },

    flatten: function(arr, shallow) {
      //console.log(`input array: ${arr}`)

      let result = flattenOneLevel(arr)
      //console.log(`flattened one level: ${result}`)

      function flattenOneLevel(inputArr) {
        //console.log('flattening one level')
        //console.log(inputArr)

        let r = []
        for (let e of inputArr) {
          //console.log(`element: ${e}`)
          if (Array.isArray(e)) {
            //console.log(`${e} is an array. pushing each element to result`)
            for (let el of e) {
              r.push(el)
              //console.log(`pushing ${el}: ${r}`)
            }
          } else {
            //console.log(`${e} is not an array. pushing ${e} to result`)
            r.push(e)
            //console.log(`new result: ${r}`)
          }
        }
        return r
      }

      if (!shallow) {
        //console.log('shallow = true, looking for more arrays...')
        while (result.find(e => Array.isArray(e))) {
          //console.log(`${e} is an array. flattening...`)
          result = flattenOneLevel(result)
          //console.log(`new result: ${result}`)
        }
        //console.log(`no more arrays. returning ${result}`)
        return result
      } else {
        return result
      }
    },

    uniq: function(array, isSorted, callback) {
      // console.log(`uniq: args: array: ${array} | callback: ${callback}`)
      let newArray = []

      if (callback) {
        // console.log(`callback provided: ${callback}`)
        // console.log(`iterating over array: ${array}`)
        array.forEach((item, i) => {
          // console.log(` [${i}.] ${item}`)

          let foundValue = newArray.find(e => callback(e) === callback(item))
          // console.log(`found item? : ${foundValue}`)

          if (foundValue) {
            foundValue = undefined
          } else {
            // console.log(`pushing element: ${item}`)

            newArray.push(item)
          }
        });
      } else {
        // for each element in array,
        // console.log(`iterating over array: ${array}`)
        array.forEach((item, i) => {

          // console.log(` [${i}.] ${item}`)

          // if it is not in newArray,
          let foundItem = newArray.find(e => e === item)
          // console.log(`found item? : ${foundItem}`)

          if(foundItem) {
            foundItem = undefined
          } else {
            // push element
            // console.log(`pushing element: ${item}`)
            newArray.push(item)
          }
        });
      }
    //  console.log(`returning new array: ${newArray}`)

    return newArray
    },

    keys: function(object) {
      // console.log(object)
      const keys = []

      // console.log('iterating over object...')
      let k = Object.keys(object)
      // console.log(k)

      for (let e of k) {
        // console.log(`pushing ${e}`)
        keys.push(e)
      }
      // console.log(`current result: ${keys}`)

      // console.log('returning')
      return keys
    },

    values: function(object) {
      let result = []
      for (let e in object) {
        result.push(object[e])
      }
      return result
    },

    functions: function(object) {
      console.log(object)

      let result = []
      let keys = Object.keys(object)
      console.log(`keys: ${keys}`)
      console.log('starting iteration...')
      for (let i = 0; i < keys.length; i++) {
        console.log(`current key: ${keys[i]} at index ${i}`)
        console.log(`value: ${object[keys[i]]}`)

        console.log(object[`${keys[i]}`])
        console.log(object[`${keys[i]}`] instanceof Function)
        console.log(typeof object[`${keys[i]}`] === 'function')

        if(typeof object[keys[i]] === 'function') {
          console.log(`${object[keys[i]]} is a function! adding name: ${object[keys[i]].name}`)
          result.push(object[keys[i]].name)
        } else {
          console.log(``)
        }
      }
      console.log(result)
      return result
    },


  }
})()

fi.libraryMethod()
