import { cats } from './data.json';

export interface PupilProps {
  id: number;
  name: string;
  image: string;
}

export const getRecomCats = (): PupilProps[]=> {
  const pupils: PupilProps[] = cats.map((cat) => ({
    id: cat.id,
    name: cat.name,
    image: cat.image
  }))
  return pupils
}

