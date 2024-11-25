import { useForm } from 'react-hook-form';

export const RHFPage = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data: any) => console.log(data);

  return (
    <div>
      Hook Form
      <form onSubmit={handleSubmit(handleRegistration)}>
        <input {...register('firstName', { required: true, maxLength: 20 })} />
        <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register('age', { min: 18, max: 99 })} />
        <input type="submit" />
      </form>
    </div>
  );
};
