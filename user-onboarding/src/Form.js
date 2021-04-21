import React from 'react';

export default function Form({ values, submit, change, disabled, errors }) {

    return (
        <form className="form container">
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
                      onChange=''
                      name="name"
                      type="text"
                    />
                </label>

                <label>
                    Email
                    <input
                      value={values.email}
                      onChange=''
                      name="email"
                      type="text"
                    />
                </label>

                <label>
                    Password
                    <input
                      value={values.password}
                      onChange=''
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
                      onChange=''
                    />
                </label>
            </div>
        </form>
    );
}