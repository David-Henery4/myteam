"use client";
import { useState } from "react";
import FormInput from "./form-components/FormInput";
import useValidation from "@/hooks/useValidation";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });
  //
  const submitFinalValues = () => {
    
  }
  //
  const {validation, errorsList} = useValidation(submitFinalValues)
  //
  const checkValues = () => {
    validation(formValues)
  }
  //
  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>

      <FormInput 
        inputName="name" 
        formDetails={{ formValues, setFormValues }} 
      />
      <FormInput
        inputName="email"
        label="email address"
        formDetails={{ formValues, setFormValues }}
      />
      <FormInput
        inputName="company"
        label="company name"
        formDetails={{ formValues, setFormValues }}
      />
      <FormInput
        inputName="title"
        formDetails={{ formValues, setFormValues }}
      />
      <FormInput
        inputName="message"
        formDetails={{ formValues, setFormValues }}
      />

      <button
        className="block mt-6 px-8 py-2 mr-auto font-semibold rounded-full text-lg bg-white text-secondaryGreen hover:bg-secondaryLightBlue active:bg-white active:text-secondaryGreen"
        type="submit"
        onClick={() => {
          checkValues()
        }}
      >
        Submit
      </button>

    </form>
  );
};

export default ContactForm;
