/* eslint-disable jsx-a11y/label-has-associated-control */
import { useUserContext } from './flaws.context';

export const AgeComponent = () => {
  const { age, changeAge } = useUserContext();

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
