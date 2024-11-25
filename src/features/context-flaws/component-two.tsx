/* eslint-disable jsx-a11y/label-has-associated-control */
import { useUserContext } from './flaws.context';

export const ComponentTwo = () => {
  const { age, changeAge } = useUserContext();

  return (
    <div style={{ padding: '1em' }}>
      <label>
        ComponentTwo
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => changeAge(e.target.valueAsNumber)}
        />
      </label>
    </div>
  );
};
