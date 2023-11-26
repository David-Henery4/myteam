import { useState, useEffect } from "react";

const FormInput = ({
  inputName,
  label = "",
  formDetails: { formValues, setFormValues },
}) => {
  const [isInputValueActive, setIsInputValueActive] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  //
  const handleCheckForValues = (value) => {
    value.trim() !== ""
      ? setIsInputValueActive(true)
      : setIsInputValueActive(false);
  };
  //
  useEffect(() => {
    handleCheckForValues(currentValue);
  }, [currentValue]);
  //
  return (
    <div className="w-full relative mt-6 first:mt-0">
      <label
        htmlFor={inputName}
        className={`capitalize absolute left-[14px] text-[15px] font-semibold text-white/60 ${
          inputName !== "message" ? "bottom-4" : "top-4"
        } 
        ${isInputValueActive ? "opacity-0" : "opacity-100"} `}
      >
        { label === "" ? inputName : label}
      </label>
      {inputName !== "message" ? (
        <input
          type="text"
          className={`w-full outline-none bg-white/0 border-b px-[14px] pb-4 ${
            isInputActive ? "border-secondaryLightBlue" : "border-white"
          }`}
          id={inputName}
          name={inputName}
          onBlur={() => setIsInputActive(false)}
          onFocus={() => setIsInputActive(true)}
          value={formValues[inputName]}
          onChange={(e) => {
            setCurrentValue(e.target.value);
            setFormValues((oldValues) => {
              return {
                ...oldValues,
                [inputName]: e.target.value,
              };
            });
          }}
        />
      ) : (
        <textarea
          className="resize-none w-full min-h-[84px] outline-none bg-white/0 border-b border-white px-[14px] py-4"
          id={inputName}
          name={inputName}
          value={formValues[inputName]}
          onChange={(e) => {
            setCurrentValue(e.target.value);
            setFormValues((oldValues) => {
              return {
                ...oldValues,
                [inputName]: e.target.value,
              };
            });
          }}
        ></textarea>
      )}
    </div>
  );
};

export default FormInput;
