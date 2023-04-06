import cats from './data.json';

export const CatList = () => {
  return (
    <div>
      {cats.cats.map((cat) => (
        <>
          <div>{cat.name}</div>
          <img src={cat.image} alt={'CAT'} />
        </>
      ))}
    </div>
  );
};
