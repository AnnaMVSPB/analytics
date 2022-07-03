import React, { useState } from 'react';
import styles from './filters.module.css';
import update from '../../img/icons/update.png';
import check from '../../img/icons/check.png';
import download from '../../img/icons/download.png';
import share from '../../img/icons/share.png';
import menu from '../../img/icons/menu.png';

function Filters() {
  const [value, setValue] = useState('')

  const updateDate = ()=>{
    let data = new Date();
    setValue(data.toLocaleDateString())
  }
  return (
    <div className={styles.filters}>
      <div><select className={styles.select}><option>Google.ru все регионы</option></select></div>
      <div className={styles.filterBox}>
        <img className={styles.imgCheck} src={check} alt=""/>
        <div className={styles.tex}><p>Обновлено</p><p>{value}</p></div>
        <button onClick={updateDate} className={styles.updateButton}><img className={styles.img} src={update} alt='' />Обновить проект</button>
      <button className={styles.button}><img className={styles.img} src={download} alt='' /></button>
      <button className={styles.button}><img className={styles.img} src={share} alt='' /></button>
      <button className={styles.buttonMenu}><img className={styles.img} src={menu} alt='' /></button>
      </div>
    </div>
  );
}

export default Filters;
