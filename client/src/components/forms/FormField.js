import React from "react";

const FormField = field => {
  const { meta: { touched, error } } = field;
  const className = `form-group ${touched && error ? "text-danger" : ""}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <input
        className="form-control"
        type={field.type}
        {...field.input}
        autoComplete="off"
      />
      <div>
        {touched ? error : ""}
      </div>
    </div>
  );
}

export default FormField;
