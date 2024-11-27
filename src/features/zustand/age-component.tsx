/* eslint-disable jsx-a11y/label-has-associated-control */

import { useUserStore } from './zustand.store';

export const AgeComponent = () => {
  const age = useUserStore((state) => state.age);
  const changeAge = useUserStore((state) => state.changeAge);

  return (
    <div className="card">
      <label>AgeComponent</label>
      <input
        id="age"
        type="number"
        value={age}
        onChange={(e) => changeAge(e.target.valueAsNumber)}
      />
    </div>
  );
};
