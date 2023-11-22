import React, { useContext, useEffect, useState } from "react";
import FormContext from "./FormContext";
import "./InputField.css";

const splitCamelCase = (str) =>
  str
    .replace(/([a-z])([A-Z0-9])/g, "$1 $2")
    .replace(/(^|\s)([a-z])/g, (x) => x.toUpperCase());

const InputField = (props) => {
  const form = useContext(FormContext);
  const [error, setError] = useState("");

  const { onValidate, name, label, ...otherProps } = props;
  let value = form.value && form.value(name);

  useEffect(() => {
    if (onValidate) {
      setError(onValidate(value));
    }
  }, [onValidate, value]);

  const setInvalid = form.setInvalid;

  useEffect(() => {
    if (setInvalid) {
      setInvalid(name, error);
    }
  }, [setInvalid, name, error]);

  if (!form.value) {
    return <div>Error: InputField should be wrapped in a form</div>;
  }

  return (
    <div className="InputField">
      <label htmlFor={name}>{label || splitCamelCase(name)}:</label>
      <input
        id={name}
        onBlur={() => form.setDirty(name)}
        value={value || ""}
        onChange={(event) => {
          form.setDirty(name);
          form.setValue(name, event.target.value);
        }}
        {...otherProps}
      />
      <div className="InputField-error">
        {form.isDirty(name) && error ? error : <>&nbsp;</>}
      </div>
    </div>
  );
};

export default InputField;
