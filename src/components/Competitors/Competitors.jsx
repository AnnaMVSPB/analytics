import React from 'react';
import styles from './competitors.module.css'

function Competitors() {
  return (
    <div className={styles.competitors}>
      <div className={styles.title}>График позиции</div>
      <div className={styles.menu}>
        <button className={styles.button}>Видимость конкурентов</button>
        <button className={styles.button}>Средняя позиция</button>
        <button className={styles.button}>Ключей в ТОП</button>
      </div>
    </div>
  );
}

export default Competitors;
