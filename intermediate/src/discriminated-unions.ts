type ValidationSuccess = {
  isValid: true,
  validationValue: string
}

type ValidationFailure = {
  isValid: false;
  errorReason: string
}

type Result = ValidationSuccess | ValidationFailure;

function logResult(result: Result){
  if(result.isValid){
    console.log('Success, validated values: ', result.validationValue);
  }
  if(result.isValid === false){
    console.log('Success, validated values: ', result.errorReason);
  }
}