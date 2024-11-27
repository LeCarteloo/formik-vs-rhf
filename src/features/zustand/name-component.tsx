/* eslint-disable jsx-a11y/label-has-associated-control */
import { useUserStore } from './zustand.store';

export const NameComponent = () => {
  const name = useUserStore((state) => state.name);
  const changeName = useUserStore((state) => state.changeName);

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
