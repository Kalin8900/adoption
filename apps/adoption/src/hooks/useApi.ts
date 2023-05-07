// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Cat as ICat } from "../api/getCatById";

// export const useApi = (obj) => {

//     const { id } = useParams();
//     const [data, setData] = useState<ICat | null>(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         if (arg) {
//           (async () => {
//             return new Promise((resolve) => {
//               setTimeout(() => {
//                 setData();
//                 setIsLoading(false);
//                 resolve(data);
//               }, 2000);
//             });
//           })(); // IIFE
//         }
//       }, []);

//     return [data, isLoading]
// }
