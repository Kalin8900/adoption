// napisz prosty hook, który będzie przyjmował callback i ustawiał state, oraz status ładowania
// const { data, isLoading } = useApi(() => getCatById(1)


// import { useEffect } from "react";
// import axios from "axios";
// import React from "react";

// function useApi(url:string) {
//     const [result, setResult] = React.useState();
//     const [loading, setLoading] = React.useState(false);
  
//     useEffect(() => {
//       setLoading(true);
//       axios.get(url).then(r => {
//         setResult(r.data);
//         setLoading(false);
//       });
//     }, [url]);
  
//     return [result, loading];
//   }

