import React from "react"
import styles from "./home.module.css"
import { HomeCard } from "./home.cards"
import { Pupil } from "./pupils"
import { useLoaderData, defer, Await } from 'react-router-dom';
import { getRecomCats } from "../api/getRecomCats";



export const Home = () => {

    const allPupils = getRecomCats()
    const pupils = allPupils.slice(1,5)
    return (
        <div className={styles.homeMain}>
            <h1 className={styles.homeH1}>Adopt a cat</h1><br />
            <h2 className={styles.homeH2}>Thinking about adopting a cat or kitten? Find out more about adopting a cat with Cats Protection in our guide.</h2><br />
            <p className={styles.homeP}>
                At Cats Protection, we believe in matching the right cat to the right home. That's why we look at everything from your potential pet's personality to where you live - creating the perfect match for both cat and owner.
                While there can be a lot to think about when adopting a cat, Cats Protection aims to take away some of your worries, providing plenty of advice along the way.
            </p>
            <h3 className={styles.homeH3}>How to adopt a cat</h3><br />
            <p className={styles.homeP}>While our branches and centres were closed to the public during the pandemic, our dedicated volunteers and employees continued to match cats with new owners through our hands-free homing process.<br />
                In fact, in the last year we rehomed 30,000 cats, proof of just how effective our new way of homing has been.<br />
                For the foreseeable future, we’ll be continuing to home our cats virtually, with one small change. Our centres will be offering visits by appointment – giving you a chance to meet (and get to know) the cat you’ve been matched with.</p>
            <h3 className={styles.homeH3}>Here’s our three-step guide to adopting a cat with Cats Protection.</h3>
            <HomeCard />
            <div>
                <h2 className={styles.homePupils}>Some of our pupils:</h2>
                <div className={styles.pupils}>
                    {pupils.map((pupil) => (
                    <Pupil 
                    id={pupil.id}
                    name={pupil.name}
                    image={pupil.image}/>
                    ))}
                </div>
            </div>
        </div>
    )
}