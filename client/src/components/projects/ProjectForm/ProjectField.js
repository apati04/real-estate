import React, { Fragment } from 'react';
import { Input } from 'antd';
const ProjectField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <Fragment>
      <label>{label}</label>
      <Input
        {...input}
        type={type}
        placeholder={label}
        style={{ marginBottom: '5px' }}
      />
      {touched && error && <span>{error}</span>}
    </Fragment>
  );
};

export default ProjectField;
