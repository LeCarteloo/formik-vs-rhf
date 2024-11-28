import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().min(8).max(32).required(),
});

const handleRegistration = (data: any) => console.log(data);

export const RHFPage = () => {
  const {
    register,
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

  return (
    <div style={{ height: 'min-content' }}>
      <h1>Signup (RHF)</h1>
      <form onSubmit={handleSubmit(handleRegistration)} className="card">
        <input {...register('email')} />
        <div>{errors.email?.message}</div>
        <input {...register('username')} />
        <div>{errors.username?.message}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
