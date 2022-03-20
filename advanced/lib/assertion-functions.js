"use strict";
function loadPerson() {
    return { name: '', dateOfBirth: new Date };
    //return { name: 'Harpreet Singh Randhawa', dateOfBirth: new Date}
}
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
function assertDate(value) {
    if (value instanceof Date)
        return;
    else
        throw new TypeError('value is not a Date');
}
const maybePerson = loadPerson();
assert(maybePerson != null, 'Could not load person');
console.log('Name: ', maybePerson.name);
assertDate(maybePerson.dateOfBirth);
console.log('DOB: ', maybePerson.dateOfBirth);
