import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().min(8).max(32).required(),
});

export const RHFControlled = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const handleRegistration = (data: any) => console.log(data);

  return (
    <div style={{ height: 'min-content' }}>
      <h1>Signup (RHF)</h1>
      <form onSubmit={handleSubmit(handleRegistration)} className="card">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <>
              <input {...field} />
              <div>{errors.email?.message}</div>
            </>
          )}
        />
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <>
              <input {...field} />
              <div>{errors.username?.message}</div>
            </>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
