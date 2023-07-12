import React from 'react';
import styles from './Home.module.css'
import Drawer from '../Drawer/Drawer'
import AllRoutes from '../AllRoutes/AllRoutes'
export default function Home() {
  return (
    <div className={styles.contain}>
      <div className={styles.left}>
        <Drawer />
      </div>
      <div className={styles.right}>
        <AllRoutes />
      </div>
    </div>
  )
}
