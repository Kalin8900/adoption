import { Link } from 'react-router-dom';
import styles from '../cat/cat.module.css';
import { Route } from '../routes';
import { useGetIsCurrentPath } from '../navbar/useIsCurrentPath';

export const Cat = () => {
  const isCurrentPath = useGetIsCurrentPath();

return (
    <div>CAT</div>
)
}