import { cats } from './data.json';
import { Cat } from "./getCatById"


export const getAllCats = () : Cat[] => {
    return cats
}