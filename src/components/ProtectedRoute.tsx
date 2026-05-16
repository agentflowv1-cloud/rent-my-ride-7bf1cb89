import React from 'react';
import { useStore } from '../store';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useStore();

  if (!isLoggedIn) {
    return <div>You are not logged in</div>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;