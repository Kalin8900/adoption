import React from "react"
import styles from "./home.module.css"
import Image1 from '../assets/cat-card1.jpg';
import Image2 from '../assets/cat-card2.jpg';
import Image3 from '../assets/cat-card3.jpg';
import { Route } from '../routes';
import { Link } from "react-router-dom";

export const HomeCard = () => {

return (

    <div className={styles.cards}>
        <div className={styles.card}>
            <img src={Image1} alt="card1" className={styles.image}/>
            <Link to={Route.Info}>
                <h3 className={styles.cardH}>1. Find a cat</h3>
            </Link>
            <p className={styles.description}>How can I adopt a cat near me? Use our handy Find-a-cat tool to search for cats and kittens in your area. Can’t find a cat? You can always get in touch with your local branch or centre.</p>
        </div>
        <div className={styles.arrowIcon} />
        <div className={styles.card}>
            <img src={Image3} alt="card2" className={styles.image}/>
            <Link to={Route.Info}>
                <h3 className={styles.cardH}>2. Get in touch</h3>
             </Link>
            <p className={styles.description}>Speak to your local branch or centre and they’ll let you know the next steps. You’ll either be matched with a cat virtually, or offered an appointment to be matched with a cat in person.</p>
        </div>
        <div className={styles.arrowIcon} />
            <div className={styles.card}>
            <img src={Image2} alt="card3" className={styles.image}/>
            <Link to={Route.Info}>
                <h3 className={styles.cardH}>3. Adopt your cat</h3>
            </Link>
            <p className={styles.description}>Once you’ve sorted the paperwork, your local branch or centre will arrange for you to collect your cat. Find out more about preparing for a cat in our guide. We may be able to deliver your cat in some circumstances.</p>
        </div>
    </div>

)

{/* <ul className={styles.description}>
<li className={styles.li1}>How can I adopt a cat near me? Use our handy Find-a-cat tool to search for cats and kittens in your area. Can’t find a cat? You can always get in touch with your local branch or centre.</li>
<li>Speak to your local branch or centre and they’ll let you know the next steps. You’ll either be matched with a cat virtually, or offered an appointment to be matched with a cat in person.</li>
<li>Once you’ve sorted the paperwork, your local branch or centre will arrange for you to collect your cat. Find out more about preparing for a cat in our guide. We may be able to deliver your cat in some circumstances.</li>
</ul> */}


}

