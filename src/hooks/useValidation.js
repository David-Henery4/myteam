import { useState, useEffect } from "react"

const useValidation = (submitFinalValues) => {
  const [errorsList,setErrorsList] = useState({})
  const [validatedValues, setValidatedValues] = useState({})
  //
  const ifValid = (name, validValue) => {
    setValidatedValues((oldValues) => {
      return {
        ...oldValues,
        [name]: validValue,
      };
    });
    delete errorsList[name];
  }
  const ifInvalid = (name) => {
    setErrorsList((oldValues) => {
      return {
        ...oldValues,
        [name]: {
          isError: true,
          msg: name === "email" ? "Email is not valid" : "This field is required",
        },
      };
    });
    delete validatedValues[name]; // might have to use the set function
  }
  //
  const checkEmailInput = (name, rawEmailValue) => {
    const trimmedEmailValue = rawEmailValue.trim()
    // false is temp
    if (trimmedEmailValue === false){
      ifInvalid(name)
    } else {
      ifValid(name, trimmedEmailValue)
    }
  }
  //
  const checkTextInput = (name, rawTextValue) => {
    const trimmedTextValue = rawTextValue.trim()
    if (trimmedTextValue.length <= 0){
      ifInvalid(name)
    } else {
      ifValid(name, trimmedTextValue)
    }
  }
  //
  const validation = (values) => {
    console.log(values)
  }
  //
  const submitValues = () => {
    // submitFinalValues()
  }
  //
  return {validation, errorsList}
}

export default useValidation

// Old logic
// setValidatedValues((oldValues) => {
//   return {
//     ...oldValues,
//     [name]: trimmedTextValue,
//   };
// });
// delete errorsList[name];