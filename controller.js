"use strict"
module.exports = {
    validate: function(data,rules) {
    let keys = Object.keys(data);
    if(JSON.stringify(keys.sort())==JSON.stringify(rules.sort())) {
        return [];
      }
    else {
        let missing = rules.filter(x=> !keys.includes(x));
        return missing;
    }
       
},

//function to handle removing item from object
del: function(data,val) {
    if (val in data) {
        delete data[val];
        return data;
        }
    else {
       return [];
    }
}
}
