import { cats } from './data.json';

export interface PupilProps {
  id: number;
  name: string;
  image: string;
}

export const getRecomCats = (numberOfPupils: number): PupilProps[]=> {
  const pupils: PupilProps[] = cats.map((cat) => ({
    id: cat.id,
    name: cat.name,
    image: cat.image
  }))
  return pupils.slice(0, numberOfPupils)
}

