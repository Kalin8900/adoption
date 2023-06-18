import { Suspense } from 'react';
import { Link, useParams, useLoaderData, defer, Await } from 'react-router-dom';
import { Cat as ICat, getCatById } from '../api/getCatById';
import styles from '../cat/cat.module.css';
import { Error } from '../error/error';
import { Loading } from '../loadingPages/loading';
// import { useApi } from '../hooks/useApi';

export function loader({ params }:{params: {id: number}}) {
  return ({cat: getCatById(params.id)})
} 

export const Cat = () => {
  // const { id } = useParams();

  const cat = useLoaderData() as ICat
  // const [cat, setCat] = useState<ICat | null>(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (id) {
  //     (async () => {
  //       return new Promise((resolve) => {
  //         setTimeout(() => {
  //           const cat = getCatById(Number(id));
  //           setCat(cat);
  //           setIsLoading(false);
  //           resolve(cat);
  //         }, 2000);
  //       });
  //     })(); // IIFE
  //   }
  // }, [id]);



//  const handleClick = () => {
//   if (cat){
//     const reservedCat = {...cat, available: false}
//     setCat(reservedCat)
//   }
//  }

//   // conditional rendering
//   if (isLoading) {
//     return <Loading />
//   }

//   if (!cat) {
//     return <Error />
//   }



  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={cat}>
        <div className={styles.catDetail}>
          <div className={styles.catName}>{cat.name}</div>
          <img className={cat.available ? styles.catImage : styles.catImageGrey} src={cat.image} alt="cat" />
          <ul className={styles.list}>
            <li>{`Breed: ${cat.breed}`}</li>
            <li>{`Age: ${cat.age}`}</li>
            <li>{`Gender: ${cat.gender}`}</li>
            <li>{`Adoption fee: ${cat.adoption_fee}$`}</li>
            <li>{`Status: ${cat.available ? "Available" : "Reserved"}`}</li>
          </ul>
          <div className={styles.catDescription}>{cat.description}</div>
          {/* {cat.available ? (<button className={styles.buttonRsv} onClick={handleClick}>Reserve</button>) : ""} */}
          <Link
          to=".."
          relative="path"
          className={styles.backButton}
          >&larr; <span>Back to all cats</span></Link>
        </div>
        <div className={styles.arrows}>
          {cat.id > 1 ? 
            (<Link to={`/cats/${cat.id-1}`}>
              <div className={styles.arrowIconLeft} />
            </Link>)
          : <div className={styles.arrowIconLeftTrans} />}
          {getCatById(Number(cat.id +1)) ? 
            (<Link to={`/cats/${cat.id+1}`}>
              <div className={styles.arrowIconRight}/>
            </Link>)
          : <div className={styles.arrowIconRightTrans}/>}
        </div>
      </Await>
    </Suspense>
  );
};
