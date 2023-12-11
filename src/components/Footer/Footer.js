import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {

  return (
     <footer>
    <div className={styles.pagination}>
        <div className={styles.pages}>
            <div className={styles.pageNumber 
            } onClick={() => props.page(1)}>1</div>
            <div className={styles.pageNumber} onClick={() => props.page(2)}>2</div>
            <div className={styles.pageNumber}onClick={() => props.page(3)}>3</div>
            <div className={styles.pageNumber}onClick={() => props.page(4)}>4</div>
            <div className={styles.pageNumber}onClick={() => props.page(5)}>5</div>
            <div className={styles.pageNumber}onClick={() => props.page(6)}>6</div>
        </div>
    </div>
    </footer> 
  );
};

export default Footer; 
