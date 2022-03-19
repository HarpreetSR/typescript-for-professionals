"use strict";
function logResult(result) {
    if (result.isValid) {
        console.log('Success, validated values: ', result.validationValue);
    }
    if (result.isValid === false) {
        console.log('Success, validated values: ', result.errorReason);
    }
}
