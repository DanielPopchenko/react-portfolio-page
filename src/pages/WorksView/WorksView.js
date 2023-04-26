import React from 'react';
import styles from '../WorksView/WorksView.module.css';
import workerImage from '../../images/worker.webp';

export default function WorksView() {
  return (
    <section className={styles.worksView}>
      <h1 className={styles.title}>Works</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo minima esse doloribus velit earum quas ex ipsam
        labore possimus, sint dolores cumque quisquam error magni ipsum odio amet ipsa saepe! Ea corporis eos molestiae
        nam nobis ad quaerat tempora quisquam cupiditate temporibus eius voluptates dolorem adipisci, aliquam quasi
        corrupti in laudantium dolor est omnis recusandae? Nihil asperiores earum sed saepe.
      </p>

      <ul className={styles.worksList}>
        <li className={styles.worksListItem}>
          <img src={workerImage} className={styles.image} alt="worker" />
        </li>

        <li className={styles.worksListItem}>
          <img src={workerImage} className={styles.image} alt="worker" />
        </li>

        <li className={styles.worksListItem}>
          <img src={workerImage} className={styles.image} alt="worker" />
        </li>

        <li className={styles.worksListItem}>
          <img src={workerImage} className={styles.image} alt="worker" />
        </li>

        <li className={styles.worksListItem}>
          <img src={workerImage} className={styles.image} alt="worker" />
        </li>

        <li className={styles.worksListItem}>
          <img src={workerImage} className={styles.image} alt="worker" />
        </li>
      </ul>
    </section>
  );
}
