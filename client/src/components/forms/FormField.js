import React from "react";

const FormField = field => {
  const { meta: { touched, error } } = field;
  const className = `form-control ${touched && error ? "is-invalid" : ""}`;

  if (field.type === "radio") {
    return (
      <div>
        <input
          className={className}
          type="radio"
          {...field.input}
        />
        <label>{field.label}</label>
        <div className="invalid-feedback">
          {touched ? error : ""}
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label className="lead">{field.label}</label>
        <input
          className={className}
          type={field.type}
          {...field.input}
          autoComplete="off"
        />
        <div className="invalid-feedback">
          {touched ? error : ""}
        </div>
      </div>
    );
  }
}

export default FormField;
