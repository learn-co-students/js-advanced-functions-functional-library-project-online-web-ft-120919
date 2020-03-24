const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i]);

      return collection;
    },

    keys: function (object) {
      const keys = [];

      for (let key in object) {
        keys.push(key);
      }

      return keys;
    },

    values: function (object) {
      const values = [];

      for (let key in object) {
        values.push(object[key]);

      }
      return values;
    },

    map: function (collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection);

      const newArray = [];

      for (let i = 0; i < collection.length; i++)
        newArray.push(callback(collection[i]));

      return newArray;
    },

    reduce: function (c = [], callback = () => {}, acc) {
      let collection = c.slice(0);

      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }

      let len = collection.length;

      for (let i = 0; i < len; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function (collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection);

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i]))
          return collection[i];

      return undefined;
    },

    filter: function (collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection);

      const newArray = [];

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i]))
          newArray.push(collection[i]);

      return newArray;
    },

    size: function (collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length;
    },

    first: function (array, stop = false) {
      return (stop) ? array.slice(0, stop) : array[0];
    },

    last: function (array, start = false) {
      return (start) ? array.slice(array.length - start, array.length) : array[array.length - 1];
    },

    compact: function (array) {
      const falseyValues = new Set([false, null, 0, '', undefined, NaN]);

      return array.filter(element => !falseyValues.has(element));
    },

    sortBy: function (array, callback) {
      const newArray = [...array];

      return newArray.sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    unpack: function (receiver, array) {
      for (let element of array)
        receiver.push(element);
    },

    flatten: function (array, shallow, newArray = []) {
      if (!Array.isArray(array))
        return newArray.push(array);

      if (shallow) {
        for (let element of array)
          Array.isArray(element) ? this.unpack(newArray, element) : newArray.push(element);
      } else {
        for (let element of array) {
          this.flatten(element, false, newArray);
        }
      }

      return newArray;
    },

    uniq: function (array, sorted = false, callback = false) {
      if (sorted) {

        return fi.uniqSorted(array, callback);

      } else if (!callback) {

        return Array.from(new Set(array));

      } else {

        const modifiedElements = new Set();
        const uniqElements = new Set();

        for (let element of array) {

          const moddedElement = callback(element);

          if (!modifiedElements.has(moddedElement)) {

            modifiedElements.add(moddedElement);
            uniqElements.add(element);

          }
        }

        return Array.from(uniqElements);
      }
    },


    functions: function (object) {
      const functionNames = [];

      for (let key in object) {
        if (typeof object[key] === "function") {
          functionNames.push(key);
        }
      }

      return functionNames.sort();
    },


  };
})();

fi.libraryMethod();