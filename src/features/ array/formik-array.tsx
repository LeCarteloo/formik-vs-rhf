import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().min(8).max(32).required(),
  phoneNumbers: yup
    .array()
    .of(yup.string().required('Phone number is required')),
});

const handleRegistration = (data: any) => console.log(data);

export const FormikArray = () => {
  return (
    <div>
      <h1>Signup (FORMIK)</h1>
      <Formik
        validationSchema={schema}
        initialValues={{
          username: '',
          email: '',
          phoneNumbers: [''],
        }}
        onSubmit={handleRegistration}
      >
        {({ errors, touched }) => (
          <Form className="card">
            <Field name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field name="username" />
            {errors.username && touched.username && (
              <div>{errors.username}</div>
            )}

            <FieldArray name="phoneNumbers">
              {({ push, remove, form }) => (
                <div>
                  {form.values.phoneNumbers.map((_: string, index: number) => (
                    <div key={index}>
                      <Field name={`phoneNumbers.${index}`} />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    Add Phone Number
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
