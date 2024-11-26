import { useForm, useFieldArray } from 'react-hook-form';

const handleRegistration = (data: any) => console.log(data);

export const RHFArray = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      phoneNumbers: [{ value: '000 000 000' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'phoneNumbers',
  });

  return (
    <div>
      <h1>Signup (React Hook Form)</h1>
      <form onSubmit={handleSubmit(handleRegistration)} className="card">
        {fields.map((item, index) => (
          <div key={item.id}>
            <input {...register(`phoneNumbers.${index}.value`)} />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ value: '' })}>
          Add Phone Number
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
