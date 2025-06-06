import * as React from 'react';
import {
  AuthenticationContext,
  LocalizationProvider,
  SessionContext,
  type Session,
} from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';

const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456',
  },
};

export default function AccountDemoSignedOut() {
  const [session, setSession] = React.useState<Session | null>(null);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    // preview-start
    <LocalizationProvider>
      <AuthenticationContext.Provider value={authentication}>
        <SessionContext.Provider value={session}>
          <Account />
        </SessionContext.Provider>
      </AuthenticationContext.Provider>
    </LocalizationProvider>
    // preview-end
  );
}
