const fi = (function () {
	return {
		libraryMethod: function () {
			return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
		},

		each: function (collection, callback) {
			let group =
				collection instanceof Array
					? collection.slice()
					: Object.values(collection);
			console.log(group);
			for (let index = 0; index < group.length; index++) {
				const element = group[index];
				callback(element);
			}
			return collection;
		},

		map: function (collection, callback) {
			if (!(collection instanceof Array))
				collection = Object.values(collection);

			const results = [];

			for (let idx = 0; idx < collection.length; idx++)
				results.push(callback(collection[idx]));

			return results;
		},
		find: function (collection, callback) {
			if (!(collection instanceof Array))
				collection = Object.values(collection);

			for (let idx = 0; idx < collection.length; idx++)
				if (callback(collection[idx])) return collection[idx];

			return undefined;
		},
		filter: function (collection, callback) {
			if (!(collection instanceof Array))
				collection = Object.values(collection);

			const results = [];

			for (let idx = 0; idx < collection.length; idx++)
				if (callback(collection[idx])) results.push(collection[idx]);

			return results;
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

		size: function (collection) {
			return collection instanceof Array
				? collection.length
				: Object.keys(collection).length;
		},

		first: function (collection, stop = false) {
			return stop ? collection.slice(0, stop) : collection[0];
		},

		last: function (collection, start = false) {
			return start
				? collection.slice(collection.length - start, collection.length)
				: collection[collection.length - 1];
		},

		compact: function (collection) {
			const badBad = new Set([false, null, 0, "", undefined, NaN]);
			return collection.filter((el) => !badBad.has(el));
		},

		sortBy: function (collection, callback) {
			const results = [...collection];
			return results.sort(function (a, b) {
				return callback(a) - callback(b);
			});
		},

		unpack: function (receiver, arr) {
			for (let val of arr) receiver.push(val);
		},

		flatten: function (collection, shallow, results = []) {
			if (!Array.isArray(collection)) return results.push(collection);
			if (shallow) {
				for (let val of collection)
					Array.isArray(val) ? this.unpack(results, val) : results.push(val);
			} else {
				for (let val of collection) {
					this.flatten(val, false, results);
				}
			}
			return results;
		},

		uniqSorted: function (collection, func) {
			const sorted = [collection[0]];
			for (let idx = 1; idx < collection.length; idx++) {
				if (sorted[idx - 1] !== collection[idx]) sorted.push(collection[idx]);
			}
			return sorted;
		},

		uniq: function (collection, sorted = false, func = false) {
			if (sorted) {
				return fi.uniqSorted(collection, func);
			} else if (!func) {
				return Array.from(new Set(collection));
			} else {
				const newValues = new Set();
				const uniqVals = new Set();
				for (let val of collection) {
					const moddedVal = func(val);
					if (!newValues.has(moddedVal)) {
						newValues.add(moddedVal);
						uniqVals.add(val);
					}
				}
				return Array.from(uniqVals);
			}
		},

		keys: function (obj) {
			// Using for loop
			const keys = [];
			for (let key in obj) {
				keys.push(key);
			}
			return keys;
		},

		values: function (obj) {
			// Using for loop
			const values = [];
			for (let key in obj) {
				values.push(obj[key]);
			}
			return values;

			// Using the custom 'map' method from above
			// return this.map(obj, (value) => value)
		},

		functions: function (obj) {
			const functionNames = [];

			for (let key in obj) {
				if (typeof obj[key] === "function") {
					functionNames.push(key);
				}
			}

			return functionNames.sort();
		},
	};
})();

fi.libraryMethod();
fi.each();
