const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i], i, collection);
      }//for
      return collection;
    },

    map: function(collection, callback) {
      let newVals = [];
      let keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++){
        newVals.push(callback(collection[keys[i]], keys[i], collection));
      }//for
      return newVals; 
    },

    reduce: function(collection, callback, acc) {
      if (!!!acc) {
        acc = Object.values(collection)[0];
        let values = Object.values(collection);
        for (let i = 1; i < values.length; i++){
          acc = callback(acc, values[i], collection);
        }//for
        return acc; 
      }//if
      else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++){
          acc = callback(acc, values[i], collection);
        }//for
        return acc; 
      }
    },

    find: function(collection, predicate) {
      let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        if(predicate(collection[keys[i]])) {
          return collection[keys[i]];
        }
      }//for
      return undefined; 
    },

    filter: function(collection, predicate) {
      let fColl = [];
      let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        if(predicate(collection[keys[i]])) {
          fColl.push(collection[keys[i]]);
        }
      }//for
      return fColl; 
    },

    size: function(collection) {
      let keys = Object.keys(collection);
      return keys.length; 
    },

    first: function(array, n) {
      if (!!n) {
        return array.slice(0, n);
      }
      else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (!!n) {
        return array.slice(-1*n);
      }
      else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      let newArr = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newArr.push(array[i]);
        }//if
      }//for
      return newArr; 
    },

    sortBy: function(array, callback) {
      let newArr = [...array];
      newArr.sort(function(a,b) {
        return callback(a) - callback(b)
      })
      return newArr; 
    },

    flatten: function(arr, shallow) {
      if (shallow) {
        //Only flatten arr a single level
        return arr.flat();
      }
      else {
        //Flatten arr completely
        if(!Array.isArray(arr)) {
          return [arr];
        }
      
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          newArr = newArr.concat(fi.flatten(arr[i]))
        }//for
        return newArr 
      }
    },//flatten

    uniq: function(array, isSorted, callback) {
      //if not sorted and no callback passed
      if(!!!isSorted && !!!callback) {
        let newArr = []
        for (let i = 0; i < array.length; i++) {
          if (!newArr.includes(array[i])) {
            newArr.push(array[i])
          }
        }//for
        return newArr; 
      }//not sorted and no callback passed
      else{
        if(!!isSorted && !!callback){
          //is sorted and callback passed
          let newArr = []
          for (let i = 0; i < array.length; i++) {
            let mappedVals = newArr.map(elt => callback(elt));
            if (!mappedVals.includes(callback(array[i]))) {
              newArr.push(array[i]);
            }
          }
          return newArr; 
        }
        else if(!!isSorted){
          //is sorted, no callback passed
          let newArr = []
          for (let i = 0; i < array.length; i++) {
            if (newArr[newArr.length - 1] != array[i]) {
              newArr.push(array[i]);
            }
          }//for
          return newArr;
        }
        else if(!!callback){
          //callback passed, not sorted
          let newArr = []
          for (let i = 0; i < array.length; i++) {
            let mappedVals = newArr.map(elt => callback(elt));
            if (!mappedVals.includes(callback(array[i]))) {
              newArr.push(array[i]);
            }
          }
          return newArr; 
        }
      }//outer else
    },

    keys: function(object) {
      let keys = [];
      for (const key in object) {
        keys.push(key);
      }//for
      return keys;
    },

    values: function(object) {
      let vals = [];
      for (const key in object) {
        vals.push(object[key]);
      }//for 
      return vals;
    },

    functions: function(object) {
      let functions = [];
      for (const key in object) {
        if (typeof object[key] === "function") {
          functions.push(key);
        }
      }//for
      return functions;
    }
    
  }
})()

fi.libraryMethod()

//typeof 3.14 => "number"
//typeof [1,2] => "object"

// function myFlatten(arr) {
//   if(!Array.isArray(arr)) {
//     return [arr];
//   }

//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr = newArr.concat(myFlatten(arr[i]))
//     // if (typeof arr[i] === "number") {
//     //   newArr.push(arr[i])
//     // }//if
//     // else {
//     //   newArr.push(myFlatten(arr[i]));
//     // }//else
//   }//for
//   return newArr 
// }

// console.log(myFlatten([1, 2]))
// console.log(myFlatten([1, [2]]))