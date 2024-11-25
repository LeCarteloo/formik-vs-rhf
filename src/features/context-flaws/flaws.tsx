import React, { useState } from 'react';
import { UserProvider } from './flaws.context';
import { ComponentOne } from './component-one';
import { ComponentTwo } from './component-two';

const Flaws = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(18);

  return (
    <div>
      <UserProvider
        name={name}
        age={age}
        changeAge={(inAge) => setAge(inAge)}
        changeName={(inName) => setName(inName)}
      >
        <ComponentOne />
        <ComponentTwo />
      </UserProvider>
    </div>
  );
};

export default Flaws;
