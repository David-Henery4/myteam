import { useState } from "react";

const FormInput = ({
  inputName,
  label = "",
  formDetails: { formValues, setFormValues },
  inputErrors,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  //
  const handleCheckForValues = (value) => {
    value.trim() !== "" ? setIsInputActive(true) : setIsInputActive(false);
  };
  //
  return (
    <div className="w-full mt-6 first:mt-0">
      <div className="w-full relative">
        <label
          htmlFor={inputName}
          className={`capitalize absolute left-[14px] text-[15px] font-semibold ${
            inputErrors?.isError ? "text-primaryRed/60" : "text-white/60"
          } ${inputName !== "message" ? "bottom-4" : "top-4"} 
        ${isInputActive ? "opacity-0" : "opacity-100"} `}
        >
          {label === "" ? inputName : label}
        </label>
        {inputName !== "message" ? (
          <input
            type="text"
            className={`w-full outline-none bg-white/0 border-b px-[14px] pb-4 ${
              isInputActive
                ? "border-secondaryLightBlue"
                : inputErrors?.isError
                ? "border-primaryRed"
                : "border-white"
            }`}
            id={inputName}
            name={inputName}
            onBlur={() => handleCheckForValues(currentValue)}
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
            className={`resize-none w-full min-h-[84px] outline-none bg-white/0 border-b border-white px-[14px] py-4 ${
              isInputActive
                ? "border-secondaryLightBlue"
                : inputErrors?.isError
                ? "border-primaryRed"
                : "border-white"
            }`}
            id={inputName}
            name={inputName}
            onBlur={() => handleCheckForValues(currentValue)}
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
          ></textarea>
        )}
      </div>
      {inputErrors?.isError && (
        <p className=" font-bold italic text-[10px] text-primaryRed text-left mt-2 ml-[14px]">
          {inputErrors?.msg}
        </p>
      )}
    </div>
  );
};

export default FormInput;
