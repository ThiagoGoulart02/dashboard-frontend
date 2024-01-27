import React from "react";
import technologies from "../../data/technologies.json";
import { TechnologyCard } from "./TechnologyCard";
import styles from "./Technologies.module.css";

export const Technologies = () => {
  return (
    <section id="technologies" className={styles.container}>
      <h2 className={styles.title}>Technologies</h2>
      <div className={styles.technologies}>
        {technologies.map((technology, id) => {
          return <TechnologyCard key={id} technology={technology} />;
        })}
      </div>
    </section>
  );
};
