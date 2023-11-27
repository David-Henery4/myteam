import { useState, useEffect } from "react";

const useValidation = (submitFinalValues) => {
  const [errorsList, setErrorsList] = useState({});
  const [validatedValues, setValidatedValues] = useState({});
  const [formLength, setFormLength] = useState(0);
  //
  const ifValid = (name, validValue) => {
    setValidatedValues((oldValues) => {
      return {
        ...oldValues,
        [name]: validValue,
      };
    });
    setErrorsList((oldValues) => {
      delete oldValues[name]
      return {
        ...oldValues
      }
    })
  };
  const ifInvalid = (name) => {
    setErrorsList((oldValues) => {
      return {
        ...oldValues,
        [name]: {
          isError: true,
          msg:
            name === "email" ? "Email is not valid" : "This field is required",
        },
      };
    });
    setValidatedValues((oldValues) => {
      delete oldValues[name]
      return {
        ...oldValues
      }
    })
  };
  //
  const checkEmailInput = (name, rawEmailValue) => {
    const trimmedEmailValue = rawEmailValue.trim();
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(trimmedEmailValue)
    ) {
      ifInvalid(name);
    } else {
      ifValid(name, trimmedEmailValue);
    }
  };
  //
  const checkTextInput = (name, rawTextValue) => {
    const trimmedTextValue = rawTextValue.trim();
    if (trimmedTextValue.length <= 0) {
      ifInvalid(name);
    } else {
      ifValid(name, trimmedTextValue);
    }
  };
  //
  const validation = (values) => {
    const arrayOfNamesAndValues = Object.entries(values);
    setFormLength(arrayOfNamesAndValues.length);
    arrayOfNamesAndValues.forEach((value) => {
      const name = value[0];
      const inputValue = value[1];
      //
      if (name === "email") {
        checkEmailInput(name, inputValue);
      } else {
        checkTextInput(name, inputValue);
      }
    });
  };
  //
  const submitValues = () => {
    const validatedValuesLength = Object.entries(validatedValues).length
    const errorsListLength = Object.entries(errorsList).length
    if (validatedValuesLength === formLength && validatedValuesLength && errorsListLength <= 0){
      submitFinalValues(validatedValues)
      return
    }
  };
  //
  useEffect(() => {
    submitValues()
  },[validatedValues, errorsList])
  //
  return { validation, errorsList };
};

export default useValidation;

