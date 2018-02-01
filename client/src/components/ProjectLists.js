import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import FormField from "./forms/FormField";

class ProjectLists extends Component {

  formSubmit = values => {
    console.log(values);
  }

  render() {

    const style = {
      container: {
        marginTop: "20px"
      }
    }

    const { handleSubmit } = this.props;

    return (
      <div style={style.container}>
        <form onSubmit={handleSubmit(this.formSubmit)}>
          <div className="form-inline">
            <Field
              label="EMPIRE STATE BUILDING - MEETING MAY 2013"
              name="property"
              type="radio"
              value="EMPIRE STATE BUILDING - MEETING MAY 2013"
              component={FormField}
            />
            <div className="text-right">
              <button type="button" className="btn btn-primary">EDIT</button>
              <button type="button" className="btn btn-warning">VIEW MAP</button>
            </div>
          </div>
          <div className="form-inline">
            <Field
              label="1700 AVE, WASHINGTON DC"
              name="property"
              type="radio"
              value="1700 AVE, WASHINGTON DC"
              component={FormField}
            />
            <button type="button" className="btn btn-primary">EDIT</button>
            <button type="button" className="btn btn-warning">VIEW MAP</button>
          </div>
          <button className="btn btn-info" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "address" })(ProjectLists);
