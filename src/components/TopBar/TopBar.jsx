import React from 'react';
import styles from './topBar.module.css'
import bell from '../../img/icons/bell.png'
import avatar from '../../img/avatar/user.png'

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.titleBox}>
        <div className={styles.title}>Проверка позиций</div>
        <div className={styles.titleNavigation}><p className={styles.p}>Главная</p><p className={styles.p}>//</p><p className={styles.p}>Проверка позиций</p><p className={styles.p}>//</p><p className={styles.p}>Результат проекта</p></div>
      </div>
      <div className={styles.titleNavigationRight}>
        <div className={styles.titleNavigation}><p>3299</p><p className={styles.p}>лимитов</p><p className={styles.plus}>+</p></div>
        <div className={styles.messagesBox}><div style={{"height":"20px"}}><img className={styles.icons}src={bell} alt=''/><div className={styles.messages}>8</div></div></div>
     <div><img src={avatar} alt=''/></div>
      </div>
    </div>
  );
}

export default TopBar;
