import { useLocation } from 'react-router-dom';
import { Route } from '../routes';

export const useGetIsCurrentPath = () => {
  const location = useLocation();

  return (path: Route): boolean => {
    return location.pathname === path;
  };
};
