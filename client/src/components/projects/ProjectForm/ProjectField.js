import React from 'react';
import { Input } from 'antd';
const ProjectField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...input} type={type} style={{ marginBottom: '5px' }} />
      {touched && error}
    </div>
  );
};

export default ProjectField;
