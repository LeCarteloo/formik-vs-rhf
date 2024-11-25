/* eslint-disable jsx-a11y/label-has-associated-control */
import { useUserContext } from './flaws.context';

export const ComponentOne = () => {
  const { name, changeName } = useUserContext();

  return (
    <div style={{ padding: '1em' }}>
      <label>
        ComponentOne
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
      </label>
    </div>
  );
};
