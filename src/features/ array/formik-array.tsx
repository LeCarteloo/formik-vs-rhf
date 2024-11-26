/* eslint-disable react/no-array-index-key */
import { Formik, Form, Field, FieldArray } from 'formik';

const handleRegistration = (data: any) => console.log(data);

export const FormikArray = () => {
  return (
    <div>
      <h1>Signup (FORMIK)</h1>
      <Formik
        initialValues={{
          phoneNumbers: ['000 000 000'],
        }}
        onSubmit={handleRegistration}
      >
        {() => (
          <Form className="card">
            <FieldArray name="phoneNumbers">
              {({ push, remove, form }) => (
                <>
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
                </>
              )}
            </FieldArray>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
