/* eslint-disable jsx-a11y/label-has-associated-control */
import { useUserContext } from './flaws.context';

export const NameComponent = () => {
  const { name, changeName } = useUserContext();

  return (
    <div className="card">
      <label>NameComponent</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => changeName(e.target.value)}
      />
    </div>
  );
};
