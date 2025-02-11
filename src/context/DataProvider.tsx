import { PropsWithChildren, useMemo } from 'react';

import { DataContext } from '@/context/useData';

export function DataProvider({ children }: PropsWithChildren) {
  const valueMemo = useMemo(() => ({ userName: 'Luuk Leenders' }), []);

  return <DataContext.Provider value={valueMemo}>{children}</DataContext.Provider>;
}
