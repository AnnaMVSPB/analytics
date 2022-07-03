import React from 'react';
import styles from './projectTabs.module.css'
import {models} from '../../model/models'

function ProjectTabs() {
  console.log(models)
  return (
    <div className={styles.tabs}>
     <div className={styles.tabsBox}><select className={styles.select}><option>Аттракционы (holiday-rent.com.ua)</option></select></div> 
     <div className={styles.tabsBox}>
      {models.projectTabs.map(el=><button className={styles.button}>{el}</button>)}
      </div> 
    </div>
  );
}

export default ProjectTabs;
