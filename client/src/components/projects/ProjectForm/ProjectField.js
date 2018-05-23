import React from 'react';
import { Input } from 'antd';

const ProjectField = ({ input, label, type, meta: { error, touched } }) => {
  const className = `form-control ${touched && error ? "is-invalid" : ""}`;

  return (
    <div>
      <label>{label}</label>
      <Input
        {...input}
        className={className}
        type={type}
        style={{ marginBottom: '5px' }}
      />
      <div className="invalid-feedback">
        {touched ? error : ""}
      </div>
    </div>
  );
};

export default ProjectField;
