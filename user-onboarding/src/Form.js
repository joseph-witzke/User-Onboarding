import React from 'react';

export default function Form({ values, submit, change, disabled, errors }) {

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
      };

      const onChange = (event) => {
          const { name, value, checked, type } = event.target;
          const valueToUse = type === "checkbox" ? checked : value;
          change(name, valueToUse);
      }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Add a User</h2>
                <button disabled={disabled}>submit</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className="form-group inputs">
                <h4>General Information</h4>
                <label>
                    Name&nbsp;
                    <input
                      value={values.name}
                      onChange= {onChange}
                      name="name"
                      type="text"
                    />
                </label>

                <label>
                    Email
                    <input
                      value={values.email}
                      onChange={onChange}
                      name="email"
                      type="text"
                    />
                </label>

                <label>
                    Password
                    <input
                      value={values.password}
                      onChange={onChange}
                      name="password"
                      type="text"
                    />
                </label>
            </div>

            <div className="form-group checkboxes">
                <h4>Terms of Conditions</h4>

                <label>
                    Select
                    <input
                      type="checkbox"
                      name="terms"
                      checked={values.terms}
                      onChange={onChange}
                    />
                </label>
            </div>
        </form>
    );
}