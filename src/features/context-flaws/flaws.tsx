import React, { useState } from 'react';
import { UserProvider } from './flaws.context';
import { NameComponent } from './name-component';
import { AgeComponent } from './age-component';

const Flaws = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(18);

  return (
    <div className="flaw">
      <UserProvider
        name={name}
        age={age}
        changeAge={(inAge) => setAge(inAge)}
        changeName={(inName) => setName(inName)}
      >
        <NameComponent />
        <AgeComponent />
      </UserProvider>
    </div>
  );
};

export default Flaws;
