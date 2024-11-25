import React from 'react';

type PropsVersionProps = { age: number; name: string };

export const PropsVersion = ({ age, name }: PropsVersionProps) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};
