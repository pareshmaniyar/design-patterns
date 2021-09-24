// Adaptor helps with integrate between incompatible formats
// like third party integration/legacy changes
const dateAdaptor = require('./dateUtils');
const dateUtils = dateAdaptor();
console.log(dateUtils.format("[Today is] dddd"));
