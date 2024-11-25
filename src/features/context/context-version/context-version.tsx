import React from 'react';
import { useUserContext } from '../context.const';

// Create your component
export const ContextVersion = () => {
  const { age, name } = useUserContext();

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};
