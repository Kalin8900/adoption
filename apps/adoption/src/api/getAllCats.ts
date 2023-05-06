import React from 'react';
import { cats } from './data.json';

export interface Cat {
  id: number;
  name: string;
  age: number;
  breed: string;
  color: string;
  gender: string;
  image: string;
  description: string;
  adoption_fee: number;
  available: boolean;
}

export const getAllCats = () : Cat | null => {
    
    return (
        
    )
}