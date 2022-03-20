"use strict";
const harpreet = {
    name: 'Harpreet Singh Randhawa',
    age: 35,
    location: 'India'
};
function logGet(obj, key) {
    const value = obj[key];
    console.log('Getting: ', key, value);
    return value;
}
const age = logGet(harpreet, 'age');
function logSet(obj, key, value) {
    console.log('Setting: ', key, value);
    obj[key] = value;
}
logSet(harpreet, 'age', 32);
