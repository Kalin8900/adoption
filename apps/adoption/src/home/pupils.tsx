 import  React, { Suspense, useState }  from "react"
import { Link, useLoaderData, defer, Await, useParams } from 'react-router-dom';
import styles from './home.module.css';
import { FC } from 'react';

export interface PupilProps {
    id: number;
    image: string;
    name: string;
  }

export const Pupil: FC<PupilProps> = (props) => {

    return (
            <div key={props.id}>
                <Link to={`/cats/${props.id}`}>
                <div className={styles.pupil}>
                    <img
                    src={props.image}
                    className={styles.pupilImage}
                    alt="pupil"
                    />
                    <div className={styles.PupilName}>{props.name}</div>
                </div>
                </Link>
            </div>
    )   
}


