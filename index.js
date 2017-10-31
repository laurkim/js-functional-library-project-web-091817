fi = (function() {
  return {

    each: function(data, funcy) {
      if (Array.isArray(data)) {
        for (const ele of data) {
          funcy(ele);
        }
      } else {
        for (const key in data) {
          funcy(data[key]);
        }
      }
      return data;
    },

    map: function(data, funcy) {
      let newData = [];
      if (Array.isArray(data)) {
        for (const ele of data) {
          newData.push(funcy(ele));
        }
        return newData;
      } else {
        for (const key in data) {
          newData.push(funcy(data[key]));
        }
      }
      return newData;
    },

    reduce: function(data, funcy, initial) {
      for (const ele of data) {
        initial = funcy(initial, ele, data);
      }
      return initial;
    },

    find: function(data, condition) {
      for (const ele of data) {
        if (condition(ele)) {
          return ele;
        }
      }
    },

    filter: function(data, condition) {
      let selected = [];
      for (const ele of data) {
        if (condition(ele)) {
          selected.push(ele);
        }
      }
      return selected;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n);
      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n);
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      let itBeTruthy = []
      for (const ele of array) {
        if (ele) {
          itBeTruthy.push(ele);
        }
      }
      return itBeTruthy;
    },

    sortBy: function(array, funcy) {
      let newArr = array.slice();
      if (typeof newArr[1] !== "object") {
        newArr.sort((a, b) => funcy(a) - funcy(b));
      } else {
        console.log("hey");
        newArr.sort((a,b) => funcy(a).localeCompare(funcy(b)));
      }
      return newArr;
    },

    keys: (object) => {
      let keys = [];
      for (const key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: (object) => {
      let values = [];
      for (const key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: (object) => {
      // let keys = [];
      // for (const key in object) {
      //   keys.push(key);
      // }
      // return keys.sort();
      return Object.getOwnPropertyNames(object).sort();
    },

    uniq: (array) => {
      uniqArr = []
      for (const ele of array) {
        if (uniqArr.includes(ele)) {
          continue;
        } else {
          uniqArr.push(ele);
        }
      }
      return uniqArr;
    }

  // end of fi
  }
})()
