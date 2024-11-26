import { ContextVersion } from './context-version/context-version';
import { PropsVersion } from './props-version/props-version';

import { UserProvider } from './const';

export const ContextPage = () => {
  return (
    <div>
      <UserProvider name="John" age={30}>
        <ContextVersion />
      </UserProvider>
      <PropsVersion name="John" age={30} />
    </div>
  );
};
