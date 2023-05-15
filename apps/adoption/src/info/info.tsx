import React from "react";
import styles from "./info.module.css"


export const Info = () => {

    return (
        <>
            <div className={styles.infoMain}>
                <h1 className={styles.infoH1}>Preparing for a cat or kitten? Help get your home set up for your pet with our expert advice</h1>
                <p className={styles.infoP}>Welcoming a new cat or kitten into your home is an exciting experience and can be the beginning of a wonderful companionship. Adopting a cat also comes with a lot of change for both of you. Our guide on planning for your new cat will help you make the transition as smooth as possible.</p>
                <h2 className={styles.infoH2}>How to plan and prepare for your new cat</h2>
                <p className={styles.infoP}>Once you’ve decided to give a cat a home, it’s time to get your home ready and prepare for a cat. You’ll need to make sure you leave enough time to make adequate preparations, as well as to go shopping for everything they need.< br/>< br/>The most important thing your cat needs is a quiet, comfortable and secluded space of their or her own. It could be a spare bedroom or a cosy space in the corner of your living room. This will make sure your cat becomes familiar with one space before exploring the rest of your home.</p>
            </div>
            <div className={styles.listsParagraphs}>
                <h2 className={styles.infoH2}>Things you'll need for your new cat</h2>
                <h2 className={styles.infoH3}>Here's a step-by-step guide on setting up a space for your new cat</h2>
            </div>
            <div className={styles.listElements}>
                <ul className={styles.list}>
                    <li className={styles.listElem}>One food bowl</li>
                    <li className={styles.listElem}>One water bowl; remember to place your food and water bowl away from each other</li>
                    <li className={styles.listElem}>Food and water</li>
                    <li className={styles.listElem}>A soft, warm and comfortable bed put somewhere quiet and safe</li>
                    <li className={styles.listElem}>A litter tray, kept away from your cat’s food and water area</li>
                    <li className={styles.listElem}>Access to a high spot where they can view their surroundings. A simple cardboard box should do the trick!</li>
                    <li className={styles.listElem}>A sturdy scratching post</li>
                    <li className={styles.listElem}>A brush</li>
                    <li className={styles.listElem}>Cat toys</li>
                    <li className={styles.listElem}>A cat carrier; choose something well ventilated and sturdy</li>
                    <li className={styles.listElem}><span className={styles.bold}>Remember:</span> When providing beds, litter trays, scratching posts and food and water bowls, it is a good idea to provide one extra. When more than one cat is sharing the home, provide one of these items per cat plus one extra. For example, two cats should have access to at least three litter trays.</li>
                </ul>
                <ol className={styles.list2}>
                    <li className={styles.listElem2}>Make sure the space is private. Keep dogs, kids and guests out</li>
                    <li className={styles.listElem2}>Make it safe. Remove potential hazards like cleaning products or anything that could be knocked over</li>
                    <li className={styles.listElem2}>Provide a hiding space. A cardboard box on top of a tall piece of furniture is ideal</li>
                    <li className={styles.listElem2}>Add your cat’s essential items. You’ll find a full list of these below</li>
                    <li className={styles.listElem2}>Provide some fun. Puzzle toys, fishing rod toys and even cardboard boxes are excellent boredom busters</li>
                </ol>
            </div>
        </>

    )
}