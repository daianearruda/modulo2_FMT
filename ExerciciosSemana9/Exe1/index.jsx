import React from 'react';
import { useForm } from 'react-hook-form';

const UserRegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          {...register('name', { required: 'Nome é obrigatório' })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      
      <div>
        <label htmlFor="email">Email </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email é obrigatório',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Email inválido'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Senha é obrigatória',
            minLength: {
              value: 6,
              message: 'A senha deve ter no mínimo 6 caracteres'
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserRegistrationForm;
