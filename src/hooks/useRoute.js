import { useEffect, useState } from 'react';

export const useRoute = route => {
  const [currentRoute, setCurrentRoute] = useState(route);

  useEffect(() => setCurrentRoute(route), [route]);

  return [currentRoute, setCurrentRoute];
};
