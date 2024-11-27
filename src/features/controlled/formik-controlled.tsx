import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().min(8).max(32).required(),
});

const handleRegistration = (data: any) => console.log(data);

export const FormikControlled = () => {
  return (
    <div>
      <h1>Signup (FORMIK)</h1>
      <Formik
        validationSchema={schema}
        initialValues={{
          username: '',
          email: '',
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

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
