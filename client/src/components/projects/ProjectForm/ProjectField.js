import React from 'react';
import { Input as input } from 'antd';
const ProjectField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} style={{ marginBottom: '5px' }} />
      {touched && error}
    </div>
  );
};

export default ProjectField;
