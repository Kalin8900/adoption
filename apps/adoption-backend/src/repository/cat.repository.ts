import { readFileSync } from 'fs';
import { join } from 'path';
// import { Cat, PupilProps } from '../data/types'


type Cat = {
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
};


type PupilProps = {
  id: number;
  name: string;
  image: string;
}

type Users = {
  id: number;
  email: string;
  password: string;
  name: string;
}

export class CatRepository {
  private cats: Cat[];
  private readonly users: Users[]

  constructor() {
    this.cats = JSON.parse(
      readFileSync(join(__filename, '..', 'data', 'data.json'), 'utf-8')
    ).cats;

  //   this.users = JSON.parse(
  //     readFileSync(join(__filename, '..', 'data', 'data.json'), 'utf-8')
  //   ).users
  // 
}

  public async getAllCats(): Promise<Cat[]> {
    return this.cats;
  }

  public async getCatById(id: number): Promise<Cat> {
    return this.cats.find((cat) => cat.id === id) || null;
  }

  public async getRecomCats(numberOfPupils: number): Promise<PupilProps[]> {
    const pupils = this.cats.map((cat) => ({
      id: cat.id,
      name: cat.name,
      image: cat.image
    }))
    return pupils.slice(0, numberOfPupils);
  }

  public async addNewCat(cat: Cat): Promise<Cat> {
    this.cats.push(cat)
    // this.cats.push((cat: Cat) => ({
    //   id: cat.id,
    //   name: cat.name,
    //   age: cat.age,
    //   breed: cat.breed,
    //   color: cat.color,
    //   gender: cat.gender,
    //   image: cat.image,
    //   description: cat.description,
    //   adoption_fee: cat.adoption_fee,
    //   available: true,
    // }))
    
    return this.cats[this.cats.length - 1]
  }

  public async deleteCat(id: number): Promise<Cat[]> {
    const catToDelete = this.cats.find((cat) => cat.id === id)
    const newCats = []
    for (let i=0; i<this.cats.length; i++) {
      if (this.cats[i] === catToDelete) {
        continue
      } else 
        newCats.push(this.cats[i])
    }
    this.cats = newCats
    return this.cats
  }

  // public async updateCat(id: number): Promise<Cat> {
  //   const catToUpdate = this.cats.find((cat) => cat.id === id)
  //   catToUpdate.
//   public async loginUser(email: string, password: string): Promise<void> {
//     if (this.users.find(user => email === user.email && password === user.password))
//         return localStorage.setItem("loggedin", "true")
//     else 
//         return localStorage.setItem("loggedin", "false")
// }

  }


// diodac reszre end pointów

// dodanie kota

// usuniecie kota

// akltualizacja kota

// jak zorbic abby na biezaca nsie aktulizaowal data.json